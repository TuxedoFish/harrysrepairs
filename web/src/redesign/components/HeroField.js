// Cursor-reactive hero field — Canvas 2D, hero-only. A faint cyan point grid
// drifts at rest; points near the cursor are repelled outward and brighten to
// accent cyan. See the implementation spec. Self-contained; toggle via `enabled`.
import React, { useEffect, useRef } from 'react'

const GAP = 36          // grid spacing
const RADIUS = 140      // cursor influence radius
const PUSH = 40         // max displacement at cursor centre
const STIFFNESS = 0.08  // spring pull toward target / frame
const DAMPING = 0.82    // velocity multiplier / frame
const DRIFT_AMP = 1.1   // rest drift amplitude (px)
const MAX_DPR = 1.6
const GLOW_RADIUS = 200   // pointer-following light radius
const GLOW_ALPHA = 0.05   // peak glow opacity (very subtle)

const REST = [60, 96, 118]    // dim cyan at rest
const ACCENT = [76, 194, 255] // #4cc2ff near cursor

const HeroField = ({ enabled = true }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!enabled) return
    const canvas = canvasRef.current
    if (!canvas) return
    const host = canvas.parentElement // the .hero element — track across whole hero
    const ctx = canvas.getContext('2d')

    const reduceMQ = window.matchMedia('(prefers-reduced-motion: reduce)')
    const hoverMQ = window.matchMedia('(hover: hover) and (pointer: fine)')
    // Full animation only on hover-capable, non-reduced-motion devices.
    const animated = () => hoverMQ.matches && !reduceMQ.matches

    let points = []
    let width = 0
    let height = 0
    let dpr = 1
    let raf = null
    let visible = false
    let sized = false
    let t0 = performance.now()
    const pointer = { x: 0, y: 0, active: false }
    const glow = { x: 0, y: 0, a: 0 } // pointer-following light (a = eased intensity)

    function buildGrid() {
      points = []
      for (let y = GAP / 2; y < height; y += GAP) {
        for (let x = GAP / 2; x < width; x += GAP) {
          points.push({
            rx: x, ry: y, x, y, vx: 0, vy: 0,
            phase: Math.random() * Math.PI * 2,
            speed: 0.5 + Math.random(),
          })
        }
      }
    }

    // Must run after layout has settled, else clientWidth/Height are 0/default.
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
    }

    function drawPoint(p, k) {
      const r = (REST[0] + (ACCENT[0] - REST[0]) * k) | 0
      const g = (REST[1] + (ACCENT[1] - REST[1]) * k) | 0
      const b = (REST[2] + (ACCENT[2] - REST[2]) * k) | 0
      const radius = 1.1 + 1.5 * k   // rest 1.1px → ~2.6px near cursor
      const alpha = 0.42 + 0.5 * k   // rest 0.42 → ~0.92 near cursor
      ctx.beginPath()
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`
      ctx.arc(p.x, p.y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    function frame(now) {
      const time = (now - t0) / 1000
      ctx.clearRect(0, 0, width, height)

      // Pointer-following glow, behind the dots. Eases toward the cursor and
      // fades in/out so it disappears smoothly when the cursor leaves the hero.
      if (pointer.active) {
        if (glow.a < 0.01) { glow.x = pointer.x; glow.y = pointer.y }
        else { glow.x += (pointer.x - glow.x) * 0.15; glow.y += (pointer.y - glow.y) * 0.15 }
      }
      glow.a += ((pointer.active ? 1 : 0) - glow.a) * 0.1
      if (glow.a > 0.002) {
        const rg = ctx.createRadialGradient(glow.x, glow.y, 0, glow.x, glow.y, GLOW_RADIUS)
        rg.addColorStop(0, `rgba(76, 194, 255, ${GLOW_ALPHA * glow.a})`)
        rg.addColorStop(1, 'rgba(76, 194, 255, 0)')
        ctx.fillStyle = rg
        ctx.fillRect(0, 0, width, height)
      }

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
        drawPoint(p, k)
      }
      raf = requestAnimationFrame(frame)
    }

    // Single static frame: rest positions, no drift, no cursor (reduced-motion / touch).
    function staticFrame() {
      ctx.clearRect(0, 0, width, height)
      for (const p of points) {
        p.x = p.rx
        p.y = p.ry
        drawPoint(p, 0)
      }
    }

    function start() {
      if (!sized) return
      if (animated()) {
        if (raf == null) {
          t0 = performance.now()
          raf = requestAnimationFrame(frame)
        }
      } else {
        staticFrame()
      }
    }

    function stop() {
      if (raf != null) {
        cancelAnimationFrame(raf)
        raf = null
      }
    }

    function onPointerMove(e) {
      if (e.pointerType === 'touch') return
      const rect = canvas.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
      pointer.active = true
    }
    function onPointerLeave() {
      pointer.active = false
    }

    // Pause/resume with visibility; do first sizing once the hero is on screen.
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

    function onPrefChange() {
      stop()
      if (visible) start()
    }
    // addEventListener on MediaQueryList (with older addListener fallback).
    const addMQ = (mq, fn) => (mq.addEventListener ? mq.addEventListener('change', fn) : mq.addListener(fn))
    const removeMQ = (mq, fn) => (mq.removeEventListener ? mq.removeEventListener('change', fn) : mq.removeListener(fn))
    addMQ(reduceMQ, onPrefChange)
    addMQ(hoverMQ, onPrefChange)

    if (hoverMQ.matches) {
      host.addEventListener('pointermove', onPointerMove)
      host.addEventListener('pointerleave', onPointerLeave)
    }

    // Initial size after first paint (layout settled), then start if already visible.
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
