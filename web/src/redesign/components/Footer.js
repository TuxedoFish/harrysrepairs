// Footer — mockup §05. Three columns (About / Links / Contact), social icon+label
// links, mono metadata bar. The Contact column is the #contact scroll target.
import React from 'react'
import { GitHubIcon, LinkedInIcon, MediumIcon } from './icons'
import logo from '../assets/liversedge-primary.svg'

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harry-liversedge-b490b379/', Icon: LinkedInIcon },
  { label: 'GitHub', href: 'https://github.com/TuxedoFish', Icon: GitHubIcon },
  { label: 'Medium', href: 'https://medium.com/@harryliversedge', Icon: MediumIcon },
]

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div>
        <div className="footer-brand">
          <img className="footer-logo" src={logo} alt="Harry Liversedge" />
        </div>
        <p>Software engineer specialising in low-latency trading systems and the quant research behind them.</p>
      </div>

      <div>
        <h4>Links</h4>
        <div className="footer-soc">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer">
              <Icon />{label}
            </a>
          ))}
        </div>
      </div>

      <div id="contact">
        <h4>Contact</h4>
        <div className="footer-contact">
          <a href="mailto:harryliversedge@gmail.com">harryliversedge@gmail.com</a>
        </div>
        <p style={{ marginTop: '14px' }}>London, United Kingdom</p>
      </div>
    </div>

    <div className="footer-bottom">
      <span>© 2026 Harry Liversedge</span>
    </div>
  </footer>
)

export default Footer
