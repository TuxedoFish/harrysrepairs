// About — short bio section near the bottom of the page. Reuses the section
// layout (.pad / .sec-*) shared with Projects.
import React from 'react'

const About = () => (
  <section className="pad" id="about">
    <div className="sec-head">
      <div className="sec-kicker">About</div>
      <h2 className="sec-title">Building crypto execution algorithms</h2>
    </div>
    <p className="about-text">
      I build the pricing models, order-routing, and market-making infrastructure that
      turn a signal into a filled order. Off the clock I run a live trading operation,
      which keeps the research honest and the systems tested against real markets rather
      than backtests.
    </p>
  </section>
)

export default About
