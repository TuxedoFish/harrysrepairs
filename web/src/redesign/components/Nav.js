// Portfolio nav — mockup §02. Work + Contact only (About/Writing dropped).
// Single-page anchors; mobile collapses to a hamburger-toggled dropdown.
import React, { useState } from 'react'
import logo from '../assets/liversedge-primary.svg'

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const Nav = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav-brand">
        <img className="nav-logo" src={logo} alt="Harry Liversedge" />
      </div>

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
