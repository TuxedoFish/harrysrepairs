// Hero background — two layers on one canvas, one rAF loop, one accent colour:
//  1) Repel field: faint cyan point grid that drifts and is pushed from the cursor.
//  2) Lattice ticker: a single glowing head walking the grid left->right at a
//     constant horizontal pace, lighting the dots it crosses (flash + fade).
// See the implementation spec. Self-contained; toggle via `enabled`.
import React, { useEffect, useRef } from 'react'

// --- shared / field ---
const GAP = 36
const RADIUS = 140
const PUSH = 40
const STIFFNESS = 0.08
const DAMPING = 0.82
const DRIFT_AMP = 1.1
const MAX_DPR = 1.6

// --- ticker ---
const STEP_MS = 225       // ms per hop (one column) -> constant rightward pace
const LIT_DECAY = 0.14    // lit units lost per second
// Vertical follows an Ornstein-Uhlenbeck process mean-reverting to 0 (the centre
// line):  y <- y*(1 - THETA) + SIGMA * N(0,1)
const OU_THETA = 0.15     // mean-reversion strength toward centre
const OU_SIGMA = 1.5      // per-hop volatility (rows)

const REST = [60, 96, 118]    // dim cyan at rest
const ACCENT = [76, 194, 255] // #4cc2ff

const easeInOut = (t) => t * t * (3 - 2 * t)

// Standard-normal sample (Box-Muller) for the OU vertical increments.
const gaussian = () => {
  let u = 0
  let v = 0
  while (u === 0) u = Math.random()
  while (v === 0) v = Math.random()
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
}

const HeroField = ({ enabled = true }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!enabled) return
    const canvas = canvasRef.current
    if (!canvas) return
    const host = canvas.parentElement // the .hero element
    const ctx = canvas.getContext('2d')

    const reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)')
    const hoverMQ = window.matchMedia('(hover: hover) and (pointer: fine)')
    const animated = () => !reduceMQ.matches // ticker runs on touch too; only reduced-motion is static

    let grid = []   // grid[col][row] -> point
    let points = [] // flat list of the same point objects (field loop)
    let cols = 0
    let rows = 0
    let width = 0
    let height = 0
    let dpr = 1
    let raf = null
    let last = 0
    let visible = false
    let sized = false
    let t0 = performance.now()
    const pointer = { x: 0, y: 0, active: false }
    const ticker = { from: { c: 0, r: 0 }, to: { c: 0, r: 0 }, t: 0, colMin: 0, colMax: 0, center: 0, y: 0 }

    const colX = (c) => GAP / 2 + c * GAP
    const rowY = (r) => GAP / 2 + r * GAP

    function buildGrid() {
      grid = []
      points = []
      cols = 0
      rows = 0
      while (colX(cols) < width) cols++
      while (rowY(rows) < height) rows++
      cols = Math.max(cols, 1)
      rows = Math.max(rows, 1)
      for (let c = 0; c < cols; c++) {
        grid[c] = []
        for (let r = 0; r < rows; r++) {
          const p = {
            rx: colX(c), ry: rowY(r), x: colX(c), y: rowY(r), vx: 0, vy: 0,
            phase: Math.random() * Math.PI * 2, speed: 0.5 + Math.random(), lit: 0,
          }
          grid[c][r] = p
          points.push(p)
        }
      }
    }

    // OU vertical: advance the mean-reverting offset, map to a grid row.
    function nextNode(n) {
      ticker.y = ticker.y * (1 - OU_THETA) + OU_SIGMA * gaussian()
      return { c: n.c + 1, r: Math.round(ticker.center + ticker.y) }
    }

    function spawnTicker() {
      ticker.colMin = 0
      ticker.colMax = cols - 1
      // Start near the left edge and walk the full width; respawn on the left
      // once the head runs off the right edge.
      const c = Math.floor(Math.random() * Math.max(1, cols * 0.08))
      ticker.center = Math.floor(rows * 0.3 + Math.random() * rows * 0.4)
      ticker.y = 0
      ticker.from = { c, r: ticker.center }
      ticker.to = nextNode(ticker.from)
      ticker.t = 0
    }

    // Light every grid dot along from->to (Bresenham-ish), so multi-row jumps streak.
    function lightSegment(c0, r0, c1, r1) {
      const steps = Math.max(Math.abs(c1 - c0), Math.abs(r1 - r0))
      for (let i = 0; i <= steps; i++) {
        const t = steps === 0 ? 0 : i / steps
        const c = Math.round(c0 + (c1 - c0) * t)
        const r = Math.round(r0 + (r1 - r0) * t)
        if (c >= 0 && c < cols && r >= 0 && r < rows) grid[c][r].lit = 1
      }
    }

    function stepTicker(dt) {
      ticker.t += (dt * 1000) / STEP_MS
      while (ticker.t >= 1) {
        ticker.t -= 1
        lightSegment(ticker.from.c, ticker.from.r, ticker.to.c, ticker.to.r)
        ticker.from = ticker.to
        if (ticker.from.c >= ticker.colMax) {
          spawnTicker() // respawn at left of region; no light across the jump
        } else {
          ticker.to = nextNode(ticker.from)
        }
      }
    }

    function drawPoint(p, k) {
      const b = Math.max(k, p.lit)
      const r = (REST[0] + (ACCENT[0] - REST[0]) * b) | 0
      const g = (REST[1] + (ACCENT[1] - REST[1]) * b) | 0
      const bl = (REST[2] + (ACCENT[2] - REST[2]) * b) | 0
      const radius = Math.max(1.1 + 1.5 * k, 1.1 + 2.4 * p.lit)
      const alpha = Math.max(0.42 + 0.5 * k, Math.min(0.95, 0.42 + 0.53 * p.lit))
      ctx.beginPath()
      ctx.fillStyle = `rgba(${r}, ${g}, ${bl}, ${alpha})`
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    function drawHead() {
      const e = easeInOut(ticker.t)
      const fx = colX(ticker.from.c)
      const fy = rowY(ticker.from.r)
      const tx = colX(ticker.to.c)
      const ty = rowY(ticker.to.r)
      const hx = fx + (tx - fx) * e
      const hy = fy + (ty - fy) * e
      // connecting line from previous node to the eased head
      ctx.beginPath()
      ctx.strokeStyle = 'rgba(76, 194, 255, 0.5)'
      ctx.lineWidth = 1
      ctx.moveTo(fx, fy)
      ctx.lineTo(hx, hy)
      ctx.stroke()
      // glow
      const hg = ctx.createRadialGradient(hx, hy, 0, hx, hy, 13)
      hg.addColorStop(0, 'rgba(76, 194, 255, 0.5)')
      hg.addColorStop(1, 'rgba(76, 194, 255, 0)')
      ctx.fillStyle = hg
      ctx.beginPath()
      ctx.arc(hx, hy, 13, 0, Math.PI * 2)
      ctx.fill()
      // core
      ctx.fillStyle = 'rgba(76, 194, 255, 0.95)'
      ctx.beginPath()
      ctx.arc(hx, hy, 2.4, 0, Math.PI * 2)
      ctx.fill()
    }

    function frame(now) {
      const dt = Math.min((now - last) / 1000, 0.05)
      last = now
      const time = (now - t0) / 1000
      ctx.clearRect(0, 0, width, height)

      stepTicker(dt)

      for (const p of points) {
        let tx = p.rx + Math.sin(time * p.speed + p.phase) * DRIFT_AMP
        let ty = p.ry + Math.cos(time * p.speed * 0.9 + p.phase) * DRIFT_AMP
        let k = 0
        if (pointer.active) {
          const dx = p.rx - pointer.x
          const dy = p.ry - pointer.y
          const d = Math.hypot(dx, dy)
          if (d < RADIUS && d > 0.0001) {
            const f = 1 - d / RADIUS
            tx += (dx / d) * f * PUSH
            ty += (dy / d) * f * PUSH
            k = f
          }
        }
        p.vx += (tx - p.x) * STIFFNESS
        p.vy += (ty - p.y) * STIFFNESS
        p.vx *= DAMPING
        p.vy *= DAMPING
        p.x += p.vx
        p.y += p.vy
        if (p.lit > 0) { p.lit -= dt * LIT_DECAY; if (p.lit < 0) p.lit = 0 }
        drawPoint(p, k)
      }

      drawHead()
      raf = requestAnimationFrame(frame)
    }

    // Single static frame for reduced-motion: field at rest + one static head/trail.
    function staticFrame() {
      ctx.clearRect(0, 0, width, height)
      for (const p of points) { p.x = p.rx; p.y = p.ry; p.lit = 0 }
      spawnTicker()
      ticker.t = 1
      lightSegment(ticker.from.c, ticker.from.r, ticker.to.c, ticker.to.r)
      for (const p of points) drawPoint(p, 0)
      drawHead()
    }

    function resize() {
      const w = canvas.clientWidth
      const h = canvas.clientHeight
      if (!w || !h) return
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
      width = w
      height = h
      canvas.width = Math.round(w * dpr)
      canvas.height = Math.round(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildGrid()
      spawnTicker()
    }

    function start() {
      if (!sized) return
      if (animated()) {
        if (raf == null) {
          last = performance.now()
          t0 = last
          raf = requestAnimationFrame(frame)
        }
      } else {
        staticFrame()
      }
    }
    function stop() {
      if (raf != null) { cancelAnimationFrame(raf); raf = null }
    }

    function onPointerMove(e) {
      if (e.pointerType === 'touch') return
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
      pointer.active = true
    }
    function onPointerLeave() { pointer.active = false }

    const io = new IntersectionObserver(
      (entries) => {
        visible = entries[0].isIntersecting
        if (visible) {
          if (!sized) { resize(); sized = true }
          start()
        } else {
          stop()
        }
      },
      { threshold: 0 }
    )
    io.observe(canvas)

    let resizeRaf = null
    function onResize() {
      if (resizeRaf) cancelAnimationFrame(resizeRaf)
      resizeRaf = requestAnimationFrame(() => {
        resize()
        if (visible && !animated()) staticFrame()
      })
    }
    window.addEventListener('resize', onResize)

    function onPrefChange() { stop(); if (visible) start() }
    const addMQ = (mq, fn) => (mq.addEventListener ? mq.addEventListener('change', fn) : mq.addListener(fn))
    const removeMQ = (mq, fn) => (mq.removeEventListener ? mq.removeEventListener('change', fn) : mq.removeListener(fn))
    addMQ(reduceMQ, onPrefChange)
    addMQ(hoverMQ, onPrefChange)

    if (hoverMQ.matches) {
      host.addEventListener('pointermove', onPointerMove)
      host.addEventListener('pointerleave', onPointerLeave)
    }

    const initRaf = requestAnimationFrame(() => {
      resize()
      sized = true
      if (visible) start()
    })

    return () => {
      stop()
      cancelAnimationFrame(initRaf)
      if (resizeRaf) cancelAnimationFrame(resizeRaf)
      io.disconnect()
      window.removeEventListener('resize', onResize)
      removeMQ(reduceMQ, onPrefChange)
      removeMQ(hoverMQ, onPrefChange)
      host.removeEventListener('pointermove', onPointerMove)
      host.removeEventListener('pointerleave', onPointerLeave)
    }
  }, [enabled])

  if (!enabled) return null
  return <canvas ref={canvasRef} className="hero-field" aria-hidden="true" />
}

export default HeroField
