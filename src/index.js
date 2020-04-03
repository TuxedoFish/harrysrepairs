// React Imports
import React from 'react'
import ReactDOM from 'react-dom'

// All CSS Files
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './css/skeleton.css'
import './css/normalize.css'
import './css/custom.css'

// Component Files
import PhoneBox from './components/PhoneBox.jsx'

// Images
import buy from './images/buy.svg'
import fix from './images/fix.svg'
import sell from './images/sell.svg'

const image_size = "150px"

export default class HomePage extends React.Component {

  render() {
  return ( 
    <>
      <div class="navbar">
        <div class="container">
          <h4 class="navbar-title">Harry's Repairs</h4>
        </div>
      </div>

      <div class="section landing parallax">
        <div class="container">
          <h2 class="landing-heading">Need an iPhone fixed in the Cranleigh area?</h2>
          <p class="landing-description">📦 Get iPhones repaired 📦 Sell old iPhones 📦 Buy refurbished iPhones 📦</p>
          <a class="button button-primary" href="mailto:harry@harrysrepairs.co.uk">Contact Me</a>
          
          <marquee scrollamount="10">
            <p class="marquee-heading">Contact me at harry@harrysrepairs.co.uk</p>
          </marquee>
        </div>
      </div>

      <div class="info">
        <div class="container info-container">
          <div class="row">
            <div class="one-third column value">
              <img src={buy} width={image_size} height={image_size}/>
              <h5 class="value-heading">Sell Old Phones</h5>
              <p class="value-description">Have an old iPhone that is broken but you don't use? Sell it to me for cash.</p>
            </div>
            <div class="one-third column value">
              <img src={fix} width={image_size} height={image_size}/>
              <h5 class="value-heading">Get iPhones repaired</h5>
              <p class="value-description">I will repair your broken iPhones: from screens to camera to home button replacements!</p>
            </div>
            <div class="one-third column value">
              <img src={sell} width={image_size} height={image_size}/>
              <h5 class="value-heading">Buy Refurbished Phones</h5>
              <p class="value-description">Buy iPhones that have been refurbished with working parts for much cheaper than other websites.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="marketplace parallax">
        
        <h2 class="marketplace-heading">Refurbished Phones</h2>

        <div class="container container-marketplace">
          <div class="row">
            <PhoneBox
              cost={49.99}
              packaging={3.75}
              id="hml300320-1"
              images={4}
              image_descriptions={["front and back", "packaged", "bottom of phone", "top of phone"]}
              name="iPod Touch 5th Gen. Refurbished"
              processorspeed="1.0 GHz"
              processortype="Apple A5"
              onboardram="512 MB"
              storage="32 GB"
              display="4″ retina display (1136 x 640, 326 ppi)"
              connectivity="USB, wi-fi, Bluetooth"
              wireless=" 802.11n 2.4 GHz and 5 GHz"
              bluetooth="4.0"
              osinstalled="iOS 6.0. Max. OS upgrade: iOS 9.x)."
              dimensions="4.86 x 2.31 x 0.24"
              weight="3.10oz"
              battery="Battery provides 40 hours (music), 8 hours (video)"
              color="Product red"
              refurbs={["New home button"]}
            />
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="container">
          <div class="row">
            <div class="one-third column footer-container">
              <p class="social-media">💃Facebook</p>
            </div>
            <div class="one-third column footer-container">
              <p class="social-media">💃Twitter</p>
            </div>
            <div class="one-third column footer-container">
              <p class="social-media">💃Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  }
  
}

ReactDOM.render(
  <HomePage />,
  document.getElementById(`app`)
)
