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

          <Column size="one-third" centered>
            <Bounce>
              <img src={buy} width={image_size} height={image_size}/>
            </Bounce>
            <Text as="h5" inverted>Cheap</Text>
            <Text as="p" inverted align="justify">
              My prices are the cheapest you will find in the Earl's Court area and I will match the price of any repair house. <a href="https://www.facebook.com/Harrys-Repairs-106851114324167/">Click here to get in touch for a quote</a>.
            </Text>
          </Column>
          
          <Column size="one-third" centered>
            <Bounce>
              <img src={fix} width={image_size} height={image_size}/>
            </Bounce>
            <Text as="h5" inverted>Reliable</Text>
            <Text as="p" inverted align="justify">
            I only use OEM screens and always make sure the phone is completely functional before returning it. <a href="https://www.facebook.com/Harrys-Repairs-106851114324167/reviews/?ref=page_internal">Click here for my reviews</a>.
            </Text>
          </Column>

          <Column size="one-third" centered>
            <Bounce>
              <img src={sell} width={image_size} height={image_size}/>
            </Bounce>
            <Text as="h5" inverted>Personal</Text>
            <Text as="p" inverted align="justify">
            I communicate directly and constantly throughout the repair process. I am always honest and provide all evidence of my work as I go. <a href="https://www.facebook.com/Harrys-Repairs-106851114324167/">Click here to get in contact</a>.
            </Text>
          </Column>

        </Container>
        {/* VIDEO - Most recent youtube video */}
        <Container>

          <Column size="one-half">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/0GDua0p4e04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Column>
          
          <Column size="one-half">
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
