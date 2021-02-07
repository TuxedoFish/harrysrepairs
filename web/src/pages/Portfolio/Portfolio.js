// React Imports
import React from 'react'
import { Link } from "react-router-dom"

// Component Files
import PhoneBox from '../../components/PhoneBox.jsx'
import Footer from '../../components/Footer.jsx'
import PortfolioLarge from '../../components/PortfolioLarge.jsx'
import HeaderNav from '../../components/HeaderNav';

const image_size = "150px"

// Portfolio jazz
// App images
import coronaware from '../../images/portfolio/corona.png'
import pendulum from '../../images/portfolio/pendulum.png'
import refme from '../../images/portfolio/refme.png'
import tutorial from '../../images/portfolio/tutorial.png'
import w8s from '../../images/portfolio/w8s.png'
import fitspiration from '../../images/portfolio/fitspiration.png'
// Website images
import w8sweb from '../../images/portfolio/w8s-website.png'
import uclapi from '../../images/portfolio/uclapi.png'
// Descriptions
const portfolio = [
    
  {
    title: "Fitspiration (App)",
    description: [
      `
      Fitspiration is a workout inspiration app with over 100 different workouts to try.
      It allows you to track the workouts you to discover new workouts from influencers 
      and personal trainers. You can time yourself doing workouts and for certain circuit
      based workouts, the app will talk you through the entire workout.
      `,
      ` 
      The app was designed in Android Studio. It was developed alongside Luca Feser and with input 
      from personal trainers Harriot Whelan and Brani Keckes. In a future update workouts from
      Fred Norton have been added. The app is on the play store with the ambition of a future release 
      on iOS.
      `,
      `
      The app is available now on the play store:
      `
    ],
    link: "https://play.google.com/store/apps/details?id=com.liversedge.workoutselector&hl=en_GB",
    image: fitspiration
  },
  {
    title: "Pendulum Drop (Game)",
    description: [
      `
      Pendulum Drop is a casual mobile game for Android devices. 
      You swing between branches and collect coins to spend in the store. 
      There are 9 skins to collect in total. If you can get a highscore of 
      over 30 tag me in a photo of you on social media or email me a photo 
      and I can add you to the special mentions in the game! 
      `,
      ` 
      The game was developed in Android Studio using the libgdx library. 
      I handled the box2D physics manually and created the majority of the graphics 
      for the game! The entire code base is Java, and whilst it was originally ported
      to iOS, in the 2020 reboot I opted not to release it on the app store.
      `,
      `
      The game is available now on the play store:
      `
    ],
    link: "https://play.google.com/store/apps/details?id=com.pendulum.game&hl=en",
    image: pendulum
  },
  {
    title: "RefMe (App)",
    description: [
      `  
      RefMe makes the process of searching for reputable sources
      much easier. Using the app you can search for a specific topic and instantly find
      multiple resources chosen for their reputation by the team at X5gon.
      `,
      `
      RefMe was created over the period of 48 hours for a hackathon at UCL. 
      RefMe was coded in React Native however in order to get the pdf functionality 
      working the app did need to use some native Android features. To port it over
      to iOS would not be too difficult however I do not have an Apple developer account!
      I developed the app with Nogg Harris and the codebase is available 
      on my github.
      `,
      `
      The app is available now on the play store:
      `
    ],
    link: "https://play.google.com/store/apps/details?id=com.refme&hl=en",
    image: refme
  },
  {
    title: "Camera Tutorial (App)",
    description: [
      `
        I know so many people at University who have great ideas for apps. They have 
        the ideas but they seem afraid to get down to creating. Therefore I wanted 
        to create a series of tutorials which gave the reader the basic skills necessary 
        to prototype app ideas. The skills I aimed to teach in this series were: creating
        layouts, connecting views and good coding practice.
      `,
      `
      Sound interested? Check the series out here:
      `
    ],
    link: "https://medium.com/@harryliversedge/making-of-w8s-part-3-camera-app-1-f3da59f6fbd1",
    image: tutorial
  },
  {
    title: "UCL API (Website)",
    description: [
      `
      During my time at UCL, I worked as a student developer for the UCL API. The project was started
      a few years before I joined with the aim of making it possible for all the data that UCL collects
      to be accessible in a format any developer could access. 
      `,
      `
      I worked primarily on web development and helped to change the website to how it looks currently. 
      I also helped to a small degree on the application UCL Assistant which used the API in an app form
      as a more reliable source of information for students then the out sourced application.
      `,
      `
      Check out the API here:
      `
    ],
    link: "https://www.uclapi.com",
    image: uclapi
  },
  {
    title: "W8S (Website)",
    description: [
      `
      W8S analyses your weightlifting form to calculate how much power you put into your lifts.
      It also tracks other variables such as your form. 
      `,
      `
      As part of designing this project I created an informational website where people can sign up
      to a newsletter as well as a promotional video for the app. The web design work was inspired
      from my work on uclapi. I try to keep my websites simple and to the point: 
      `
    ],
    link: "http://www.w8s.co",
    image: w8sweb
  },
  {
    title: "W8S (App)",
    description: [
      `
      W8S analyses your weightlifting form to calculate how much power you put into your lifts.
      It also tracks other variables such as your form. 
      `,
      `
      The app is currently in early access and if you are interested pop me a message on any
      social media or send me an email to harry@harrysrepairs.co.uk and I will add you to the
      beta testing channel!
      `
    ],
    link: "https://play.google.com/store/apps/details?id=com.w8s.android&hl=en",
    image: w8s
  },
  {
    title: "Coronaware (App)",
    description: [`
    During the global coronavirus pandemic I worked alongside
    other students at Imperial College London and University
    College London to prototype a contact tracing app which
    used a decentralised system.
    `,
    `
    The app was coded natively in Android however due to the sensitivity of
    the crisis we are unable to release the demo to the wider public. I have 
    however linked to the website for the project:
    `
    ],
    link: "https://www.closerangetechnologies.co.uk/",
    image: coronaware
  },
]

export default class Home extends React.Component {

  render() {
    
    return ( 
      <>
        <HeaderNav />

        <div className="section landing parallax">
          <div className="container landing-container">
            <h2 className="landing-heading">Harry Liversedge</h2>
            <a className="button button-primary" href="mailto:harry@harrysrepairs.co.uk" style={{width: '150px'}}>Email Me</a>
          </div>
        </div>

        {portfolio.map( (app, index) => (
          <PortfolioLarge
            index={index} 
            title={app.title}
            description={app.description}
            link={app.link}
            image={app.image}
          />
        ))}
        
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