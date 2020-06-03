// React Imports
import React from 'react'
import { Link } from "react-router-dom"

// Component Files
import PhoneBox from '../components/PhoneBox.jsx'
import Footer from '../components/Footer.jsx'

// Images
import buy from '../images/buy.svg'
import fix from '../images/fix.svg'
import sell from '../images/sell.svg'

// Phone data

import { phones } from '../sales/for_sale.jsx'

const image_size = "150px"

export default class Home extends React.Component {

  render() {
  return ( 
    <>
      <div className="navbar">
        <div className="container">
          <h4 className="navbar-title">Harry's Repairs</h4>
        </div>
      </div>

      <div className="section landing parallax">
        <div className="container landing-container">
          <h2 className="landing-heading">Harry Liversedge's Personal Website</h2>
          <a className="button button-primary" href="mailto:harry@harrysrepairs.co.uk">Email Me</a>
        </div>
      </div>

      <div className="info">
        <div className="container info-container">
          <div className="row">
            <div className="one-third column value">
              <img src={buy} width={image_size} height={image_size}/>
              <h5 className="dark-heading">Repairs</h5>
              <p className="dark-p">Recycling technology means repairing broken phones for new owners instead of throwing them away. It is critical that these devices work as good as new. I will always note all repairs and refurbishments to the phone. Moreover I am prepared to give more detail where asked.</p>
            </div>
            <div className="one-third column value">
              <img src={fix} width={image_size} height={image_size}/>
              <h5 className="dark-heading">App development</h5>
              <p className="dark-p">I have developed multiple apps that are currently on the app store. My work includes Refme, a referencing app for students and Pendulum Drop, a casual mobile game for people of all ages.</p>
            </div>
            <div className="one-third column value">
              <img src={sell} width={image_size} height={image_size}/>
              <h5 className="dark-heading">Electronics</h5>
              <p className="dark-p">As well as all of this I am learning to create guitar pedals from scratch. I have always been curious about electronics and pursued a degree in Physics and Mathematics and Statistics because of my love of electronics. Having graduated I am trying to apply this learning to making guitar pedals!</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="marketplace parallax">
        <div className="container">
          <div className="row">
            {phones.map( (phone) =>
              <div className="square">
                <div className="content">
                  <h5 className="dark-heading">{phone.config.name}</h5>
                  <Link to={"/phone/"+phone.index}>
                    <div class="button button-primary">
                        View Item
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="info">
        <div className="container instructions-container">
          <div className="row">
            <h2 className="dark-heading">How it works</h2>
            <div className="instructions">
              <p className="dark-p">1. Find a phone that you wish to buy. (Get in touch if you need any extra information on a device)</p>
              <p className="dark-p">2. Make sure to read the <Link to="/terms">terms and conditions</Link> and note the 14 day return policy.</p>
              <p className="dark-p">3. Make a purchase through PayPal resting easy that you are protected by PayPal buyer's protection.</p>
              <p className="dark-p">4. All deliveries will be done via royal mail special delivery. I will contact you personally with further details on the tracking id.</p>
              <p className="dark-p">5. Track the delivery and wait for your new phone to be delivered.</p>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  )
  }
  
}
