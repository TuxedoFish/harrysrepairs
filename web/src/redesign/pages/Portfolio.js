// New single-page portfolio (redesign). Everything lives inside the `.hl`
// wrapper so the dark theme/tokens stay isolated from the legacy repairs site.
import React from 'react'

import Nav from '../components/Nav'
import Hero from '../components/Hero'

const Portfolio = () => (
  <div className="hl">
    <Nav />
    <Hero />
    {/* Phase 3: <Projects /> (Strapi-driven card grid, anchor id="work") */}
    {/* Phase 4: <Footer /> */}
  </div>
)

export default Portfolio
