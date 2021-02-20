// React Imports
import React from 'react'
import { Link } from 'react-router-dom'

// Querying via apollo client
import { useQuery } from "@apollo/client"
import { GET_DEVICE_BY_NAME } from '../../queries/device.js'

// Component Files
import DevicePricing from '../../components/DevicePricing'
import { 
  Loader,
  Footer,
  NavBar,
} from '../../components/'
import {
  Grid,
  Image,
  Card,
} from 'semantic-ui-react'
import { getURLFromObject } from '../../utils/GetObject.js'

const Device = (props) => {

    // Get the device id from the props and query Strapi 
    let deviceName = props.match.params.deviceName
    console.log(`device name: ${deviceName}`)
    const {loading, error, data} = useQuery(GET_DEVICE_BY_NAME(deviceName))

    if (loading) {
      return <>
        <NavBar/>

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
        <NavBar/>

        <div className="section parallax device-view">
          <div className="container landing-container">
            <Grid>

              <Grid.Row>

                <Grid.Column width={5}>
                  <Image src={imageURL} width="200px" wrapped ui={false} />
                </Grid.Column>

                <Grid.Column width={8} className="device-title-overview">
                  <h2>{name}</h2>
                  <p>{description}</p>
                </Grid.Column>

              </Grid.Row>
            </Grid>
          </div>
        </div>

        
        <div className="plain-section">
          <div className="large-container">
              <div className="row">
                <h2>Repair Offerings</h2>
                <Card.Group itemsPerRow={4}>
                  {pricings.map( ({name, amount, image}) => (
                    <DevicePricing name={name} amount={amount} image={image} />
                  ))}
                </Card.Group>
              </div>
            </div>
          </div>

        <Footer inverted />
      </>
    )
  
}

export default Device