// New single-page portfolio (redesign). Everything lives inside the `.hl`
// wrapper so the dark theme/tokens stay isolated from the legacy repairs site.
import React from 'react'

import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

const Portfolio = () => (
  <div className="hl">
    <Nav />
    <Hero />
    <Projects />
    <Footer />
  </div>
)

export default Portfolio
