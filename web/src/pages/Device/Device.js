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
  Container,
  Text,
  Column
} from '../../components/'
import {
  Image,
  Card,
} from 'semantic-ui-react'
import { getURLFromObject } from '../../utils/GetObject.js'

const Device = (props) => {

    // Get the device id from the props and query Strapi 
    let deviceName = props.match.params.deviceName
    const {loading, error, data} = useQuery(GET_DEVICE_BY_NAME(deviceName))

    if (error) {
      return <p>{`Error :( ${error}`}</p>
    }

    const device = data?.devices?.[0]

    return (
      <>
        <NavBar/>

        <Container hero>

          {loading ? (
            <Loader inverted />
          ) : device && (
            <>
              <Column size="four" style={{width: 'fit-content'}}>
                <Image
                  src={getURLFromObject(device.image)}
                  width="200px"
                  wrapped
                  ui={false}
                />
              </Column>

              <Column size="six" style={{marginLeft: "0"}}>
                <Text as="h2" align="center">{device.name}</Text>
                <Text as="p" align="justify">{device.description}</Text>
              </Column>
            </>
          )}

        </Container>
        
        { !loading && device && (
          <Container inverted>
            <Text as="h2" align="center" inverted>Repair Offerings</Text>
            <Card.Group itemsPerRow={4} className="device-pricing-card-group">
              {(device.pricings || []).map( ({name, amount, image}) => (
                <DevicePricing name={name} amount={amount} image={image} />
              ))}
            </Card.Group>
          </Container>
        )}

        <Footer inverted />
      </>
    )
  
}

export default Device