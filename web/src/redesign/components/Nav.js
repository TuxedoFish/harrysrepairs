// Portfolio nav — mockup §02. Work + Contact only (About/Writing dropped).
// Single-page anchors; mobile collapses to a hamburger-toggled dropdown.
import React, { useState } from 'react'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: 'mailto:harryliversedge@gmail.com' },
]

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-brand">Harry Liversedge<b>.</b></div>

      <button
        className="nav-hamb"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <span /><span /><span />
      </button>

      <div className={`nav-links ${open ? 'is-open' : ''}`.trim()}>
        {LINKS.map(link => (
          <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Nav
