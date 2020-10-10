// React Imports
import React from 'react'
import { Link } from "react-router-dom"

// Component Files
import PhoneBox from '../components/PhoneBox.jsx'
import Footer from '../components/Footer.jsx'
import HeaderNav from '../components/HeaderNav/HeaderNav.jsx';

// Images
import buy from '../images/buy.svg'
import fix from '../images/fix.svg'
import sell from '../images/sell.svg'
import costs from '../images/costs.jpg'

// Phone data
import { phones } from '../sales/for_sale.jsx'

// Animation
import { motion } from "framer-motion"

const image_size = "150px"

const reviews = [
  {
    name: 'Nick',
    review: 'Dropped my phone to Harry for an iPhone 6 screen repair, he told me to come back in a hour and it will be ready, very quick turn around. I fully recommend him!!! What a lovely chap, priced brilliantly too!',
    date: `4th July '20`
  },
  {
    name: 'Ben',
    review: 'Great bloke, explains everything he’s doing with the phone and gets it fixed the same day and shipped. Couldn’t recommend using his repair service any more... It’s also the cheapest screen repair I’ve seen advertised in the Surrey/Hampshire (Before moving to London) area.',
    date: `16th July '20`
  },
  {
    name: 'Darren',
    review: 'So please(d) with the screen replacement Harry did. Quick, great price, and nice follow up, telling me to let him know if I get any problems. Highly recommended',
    date: `7th July '20`
  },
]

export default class Home extends React.Component {

  render() {
    
    return ( 
      <>
        <HeaderNav/>

        <div className="section landing parallax">
          <div className="container landing-container">
            <h2 className="landing-heading">Phone Repairs in Earl's Court</h2>
          </div>
        </div>

        <div className="info">
          <div className="container info-container">
            <div className="row">
              <div className="one-third column value">
                <img src={buy} width={image_size} height={image_size}/>
                <h5 className="dark-heading">Cheap</h5>
                <p className="dark-p">
                  My prices are the cheapest you will find in the Earl's Court area and I will match the price of any repair house. <a href="https://www.facebook.com/Harrys-Repairs-106851114324167/">Click here to get in touch for a quote</a>.
                </p>
              </div>
              <div className="one-third column value">
                <img src={fix} width={image_size} height={image_size}/>
                <h5 className="dark-heading">Reliable</h5>
                <p className="dark-p">
                  I only use OEM screens and always make sure the phone is completely functional before returning it. <a href="https://www.facebook.com/Harrys-Repairs-106851114324167/reviews/?ref=page_internal">Click here for my reviews</a>.
                </p>
              </div>
              <div className="one-third column value">
                <img src={sell} width={image_size} height={image_size}/>
                <h5 className="dark-heading">Personal</h5>
                <p className="dark-p">
                  I communicate directly and constantly throughout the repair process. I am always honest and provide all evidence of my work as I go. <a href="https://www.facebook.com/Harrys-Repairs-106851114324167/">Click here to get in contact</a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="section-low-padding parallax">
        <div className="container">
            <h2 className="landing-heading">Customer reviews</h2>
            <div className="row">
              {reviews.map( (review) => 
                <div className="one-third column value">
                  <p className="light-p">"{review.review}"</p>
                  <h5 className="light-h">- {review.name}</h5>
                  <p className="light-h">{review.date}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* <div className={"parallax"}>
          <div className="wide-container">
              <div class="row portfolio-row">
                <img src={costs} className="costs-image"></img>
              </div>
          </div>
        </div> */}
        
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
