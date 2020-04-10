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

// Phone data

import { phones } from './sales/for_sale.jsx'

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
            {phones.map( (phone) =>
              <PhoneBox
                cost={phone.config.cost}
                packaging={phone.config.packaging}
                id={phone.config.id}
                images={phone.config.images}
                image_descriptions={phone.config.image_descriptions}
                name={phone.config.name}
                processorspeed={phone.config.processorspeed}
                processortype={phone.config.processortype}
                onboardram={phone.config.onboardram}
                storage={phone.config.storage}
                display={phone.config.display}
                connectivity={phone.config.connectivity}
                wireless={phone.config.wireless}
                bluetooth={phone.config.bluetooth}
                osinstalled={phone.config.osinstalled}
                dimensions={phone.config.dimensions}
                weight={phone.config.weight}
                battery={phone.config.battery}
                color={phone.config.color}
                refurbs={phone.config.refurbs}
                index={phone.index}
                isFrontPage={true}
              />
            )}
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
