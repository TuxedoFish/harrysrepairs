// React Imports
import React from 'react'

// Querying via apollo client
import { useQuery } from "@apollo/client"
import { GET_DEVICE_BY_ID } from '../../queries/repairs/device.js'

// Component Files
import Footer from '../../components/Footer.jsx'
import HeaderNav from '../../components/HeaderNav'
import DevicePricing from '../../components/DevicePricing'
import { 
  Loader 
} from '../../components/'
import {
  Grid,
  Image,
  Card,
} from 'semantic-ui-react'
import { getURLFromObject } from '../../utils/GetObject.js'

const Device = (props) => {

    // Get the device id from the props and query Strapi 
    const deviceId = props.match.params.deviceId
    const {loading, error, data} = useQuery(GET_DEVICE_BY_ID(deviceId))

    if (loading) {
      return <>
        <HeaderNav/>

        <div className="section parallax device-view">
          <div className="container landing-container">
            <Loader inverted/>
          </div>
        </div>

        <Footer />
      </>
    }
    if (error) {
      console.log(`ERR: ${error}`)
      return <p>{`Error :( ${error}`}</p>
    }

    // The first result is the device we are looking at
    const { devices } = data
    const [ device ] = devices
    const { name, type, description, image, pricings } = device 
    const imageURL = getURLFromObject(image)

    return ( 
      <>
        <HeaderNav/>

        <div className="section parallax device-view">
          <div className="container landing-container">
            <Grid>
              <Grid.Row>

                <Grid.Column width={5}className="device-page-column">
                  <Card className="device-detail-overview">
                      <Image src={imageURL} wrapped ui={false} />
                      <Card.Content>
                          <Card.Header>{name}</Card.Header>
                          <Card.Description>{description}</Card.Description>
                      </Card.Content>
                  </Card>
                </Grid.Column>

                <Grid.Column width={10} className="device-page-column">
                  <Card.Group>
                    {pricings.map( ({name, amount, image}) => (
                      <DevicePricing name={name} amount={amount} image={image} />
                    ))}
                  </Card.Group>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </div>
        </div>

        <Footer />
      </>
    )
  
}

export default Device