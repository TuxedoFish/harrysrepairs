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
  (
    <div class="fb-post" data-href="https://www.facebook.com/ben.wilson.3139/posts/4631873183553529" data-show-text="true" data-width=""><blockquote cite="https://www.facebook.com/ben.wilson.3139/posts/4631873183553529" class="fb-xfbml-parse-ignore"><p>Great service and definitely the lowest price I could find in Chelsea &amp; Kensington. Battery replacement done in well under an hour and excellent customer service. Would 100% recommend.</p>Posted by <a href="#" role="button">Benedict Wilson</a> on&nbsp;<a href="https://www.facebook.com/ben.wilson.3139/posts/4631873183553529">Thursday, 12 November 2020</a></blockquote></div>
  ),
  (
    <div class="fb-post" data-href="https://www.facebook.com/george.hill.79230305/posts/3422551254636553" data-show-text="true" data-width=""><blockquote cite="https://www.facebook.com/george.hill.79230305/posts/3422551254636553" class="fb-xfbml-parse-ignore"><p>Very knowledgeable repairer who knows his stuff very well. Had to get my IPhone 7 home button replaced, and was very put...</p>Posted by <a href="#" role="button">George Hill</a> on&nbsp;<a href="https://www.facebook.com/george.hill.79230305/posts/3422551254636553">Saturday, 7 November 2020</a></blockquote></div>
  ),
  (
    <div class="fb-post" data-href="https://www.facebook.com/robert.warzee/posts/3506356199453170" data-show-text="true" data-width=""><blockquote cite="https://www.facebook.com/robert.warzee/posts/3506356199453170" class="fb-xfbml-parse-ignore"><p>I’m impressed with the level of service provided as my phone was repaired on the day it was received and then it was...</p>Posted by <a href="#" role="button">Robert Warzée</a> on&nbsp;<a href="https://www.facebook.com/robert.warzee/posts/3506356199453170">Friday, 23 October 2020</a></blockquote></div>
  )
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
        <div className="large-container full-width-mobile">
            <h2 className="landing-heading">Customer reviews</h2>
            <div className="row">
              {reviews.map( (review) => 
                <div className="one-third column value">
                  {review}
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
