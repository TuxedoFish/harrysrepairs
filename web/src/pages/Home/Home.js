// React Imports
import React from 'react'

// Component Files
import DeviceOverview from '../../components/DeviceOverview'
import { 
  Footer,
  NavBar,
  ReviewSection,
  Container,
  Text,
  Column
} from '../../components/'
import { 
  Bounce
} from '../../animations'

// Images
import buy from '../../images/buy.svg'
import fix from '../../images/fix.svg'
import sell from '../../images/sell.svg'

const image_size = "150px"

export default class Home extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return ( 
      <>
        <NavBar/>

        {/* HERO - Landing page */}
        <Container hero>
          <Text as="h2" align="center">Phone Repairs in Earl's Court</Text>
        </Container>
        {/* 3 KEY POINTS - Highlighting USP */}
        <Container inverted width="50%" popout>

          <Column size="four" centered>
            <Bounce>
              <img src={buy} width={image_size} height={image_size}/>
            </Bounce>
            <Text as="h5" inverted>Affordable</Text>
            <Text as="p" inverted align="justify">
              The prices are the cheapest you will find in the Earl's Court area and we will match the price of any repair house. <a href="https://www.facebook.com/Harrys-Repairs-106851114324167/">Click here to get in touch for a quote</a>.
            </Text>
          </Column>
          
          <Column size="four" centered>
            <Bounce>
              <img src={fix} width={image_size} height={image_size}/>
            </Bounce>
            <Text as="h5" inverted>Reliable</Text>
            <Text as="p" inverted align="justify">
            We only use OEM screens and always make sure the phone is completely functional before returning it. <a href="https://www.facebook.com/Harrys-Repairs-106851114324167/reviews/?ref=page_internal">Click here for reviews</a>.
            </Text>
          </Column>

          <Column size="four" centered>
            <Bounce>
              <img src={sell} width={image_size} height={image_size}/>
            </Bounce>
            <Text as="h5" inverted>Personal</Text>
            <Text as="p" inverted align="justify">
            We communicate directly and constantly throughout the repair process. We are always honest and provide all evidence of the work carried out. <a href="https://www.facebook.com/Harrys-Repairs-106851114324167/">Click here to get in contact</a>.
            </Text>
          </Column>

        </Container>
        {/* VIDEO - Most recent youtube video */}
        <Container>

          <Column size="six">
            <iframe width="100%" height="50vw" style={{maxHeight: "315px", height: "50vw"}} src="https://www.youtube.com/embed/LBctCgdzwS0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Column>
          
          <Column size="six">
            <Text as="h2">Video Guides</Text>
            <Text as="p" align="justify">Intrigued as to the behind the scenes of my repairs? I upload regularly to YouTube to show how to carry out a repair. I am always keen to take on new problems so if you have something wacky that needs repairing, please get in touch!</Text>
            <Text as="p" align="justify">I will always be happy to talk through a repair as in depth or not as you want with your repair. If you are electronically inclined then this means I can go through step by step how I work. If you just want a cheap repair with quality service then I can simply do the repair and return it quickly to you.</Text>
          </Column>

        </Container>
        {/* DEVICES - Select device to see prices */}
        <Container inverted>

          <Text as="h2" inverted align="center">Select your device:</Text>
          <DeviceOverview />

        </Container>
        {/* REVIEWS - Dynamic recent reviews from Strapi */}
        <Container>

            <Text as="h2" align="center">Customer reviews</Text>
            <ReviewSection />

        </Container>
        {/* FOOTER - Contact details and social media*/}
        <Footer />

      </>
    )
  }
  
}
