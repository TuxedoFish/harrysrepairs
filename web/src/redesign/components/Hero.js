// Hero — mockup §02. Quant positioning copy. Uses the design-system Button.
import React from 'react'
import Button from './Button'
import HeroField from './HeroField'

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
)

const Hero = () => (
  <header className="hero">
    <HeroField />
    <div className="hero-inner">
      <h1 className="hero-name">Harry Liversedge</h1>

      <p className="hero-value">
        Quant developer building <b>crypto execution algorithms</b>. Off the clock, I run
        a live trading operation to keep my research and infrastructure sharp.
      </p>

      <div className="hero-cta">
        <Button
          as="a"
          href="mailto:harryliversedge@gmail.com"
          variant="primary"
          iconRight={<ArrowIcon />}
        >
          Get in touch
        </Button>
        <Button as="a" href="#work" variant="ghost">View work</Button>
      </div>

      <div className="hero-meta">
        <div><span>LANGUAGES</span><b>Go · Java · Python</b></div>
        <div><span>BASED</span><b>London, UK</b></div>
      </div>
    </div>
  </header>
)

export default Hero
