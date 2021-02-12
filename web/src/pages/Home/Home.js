// React Imports
import React from 'react'

// Component Files
import DeviceOverview from '../../components/DeviceOverview'
import { 
  Loader,
  Footer,
  NavBar,
} from '../../components/'
import { 
  Bounce,
  FadeUp
} from '../../animations'

// Images
import buy from '../../images/buy.svg'
import fix from '../../images/fix.svg'
import sell from '../../images/sell.svg'

// Facebook components
import { EmbeddedPost } from 'react-facebook';

const image_size = "150px"

const reviews = [
  (
    <EmbeddedPost width="auto" href="https://www.facebook.com/jasmin.sharpe.3/posts/3713118968794996"/>
  ),
  (
    <EmbeddedPost width="auto" href="https://www.facebook.com/george.hill.79230305/posts/3422551254636553"/>
  ),
  (
    <EmbeddedPost width="auto" href="https://www.facebook.com/robert.warzee/posts/3506356199453170"/>
  )
]

export default class Home extends React.Component {

  constructor(props) {
    super(props)

    let intervalId = setInterval(this.checkCommentsVisibility, 500);

    this.state = {
      intervalId: intervalId,
      hasCommentsLoaded: false
    }
  }

  checkCommentsVisibility = () => {

    const post = document.getElementsByClassName("fb-post")[0].getElementsByTagName('span')[0].getElementsByTagName('iframe')[0]
    
    if(post.style.visibility == "visible") {

      const { intervalId } = this.state
      clearInterval(intervalId)

      this.setState({
        hasCommentsLoaded: true
      })

    }
  }

  render() {
    
    const { hasCommentsLoaded } = this.state

    return ( 
      <>
        <NavBar/>

        <div className="section landing parallax">
          <div className="container landing-container">
            <h2 className="landing-heading">Phone Repairs in Earl's Court</h2>
          </div>
        </div>

        <div className="info">
          <div className="container info-container">
            <div className="row">
              <div className="one-third column value">
                <Bounce>
                  <img src={buy} width={image_size} height={image_size}/>
                </Bounce>
                <h5 className="dark-heading">Cheap</h5>
                <p className="dark-p">
                  My prices are the cheapest you will find in the Earl's Court area and I will match the price of any repair house. <a href="https://www.facebook.com/Harrys-Repairs-106851114324167/">Click here to get in touch for a quote</a>.
                </p>
              </div>
              <div className="one-third column value">
                <Bounce>
                  <img src={fix} width={image_size} height={image_size}/>
                </Bounce>
                <h5 className="dark-heading">Reliable</h5>
                <p className="dark-p">
                  I only use OEM screens and always make sure the phone is completely functional before returning it. <a href="https://www.facebook.com/Harrys-Repairs-106851114324167/reviews/?ref=page_internal">Click here for my reviews</a>.
                </p>
              </div>
              <div className="one-third column value">
                <Bounce>
                  <img src={sell} width={image_size} height={image_size}/>
                </Bounce>
                <h5 className="dark-heading">Personal</h5>
                <p className="dark-p">
                  I communicate directly and constantly throughout the repair process. I am always honest and provide all evidence of my work as I go. <a href="https://www.facebook.com/Harrys-Repairs-106851114324167/">Click here to get in contact</a>.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="parallax video-section">
          <div className="large-container">
            <div className="row">
              {/* Embed most recent video */}
              <div className="six columns video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0GDua0p4e04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="six columns video-text">
                <h2>Video Guides</h2>
                <p>Intrigued as to the behind the scenes of my repairs? I upload regularly to YouTube to show how to carry out a repair. I am always keen to take on new problems so if you have something wacky that needs repairing, please get in touch!</p>
                <p>I will always be happy to talk through a repair as in depth or not as you want with your repair. If you are electronically inclined then this means I can go through step by step how I work. If you just want a cheap repair with quality service then I can simply do the repair and return it quickly to you.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="plain-section">
          <div className="large-container">
              <div className="row">
                  <h2>Select your device:</h2>
                  <DeviceOverview />
              </div>
          </div>
        </div>

        <div className="section-low-padding parallax">
          <div className="large-container full-width-mobile">
              <h2 className="review-heading">Customer reviews</h2>
              <div className="row review-row" style={{display: hasCommentsLoaded ? "" : "none"}}>
                {reviews.map( (review) => 
                  <div className="one-third column value review-column">
                    <div className="review-column-container">
                      <FadeUp animate={hasCommentsLoaded ? "closed" : "open"}>
                        {review}
                      </FadeUp>
                    </div>
                  </div>
                )}
              </div>
          </div>
          {!hasCommentsLoaded && <Loader inverted/>}
        </div>

        <Footer />
      </>
    )
  }
  
}
