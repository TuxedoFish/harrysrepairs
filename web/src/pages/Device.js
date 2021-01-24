// React Imports
import React from 'react'

// Querying via apollo client
import { useQuery } from "@apollo/client"
import { GET_DEVICE_BY_ID } from '../queries/repairs/device.js';

// Component Files
import Footer from '../components/Footer.jsx'
import HeaderNav from '../components/HeaderNav';

export default function Device(props) {

    // Get the device id from the props and query Strapi 
    const deviceId = props.match.params.deviceId
    const {loading, error, data} = useQuery(GET_DEVICE_BY_ID(deviceId))

    if (loading) return <p>Loading...</p>
    if (error) return <p>{`Error :( ${error}`}</p>

    // The first result is the device we are looking at
    const { devices } = data
    const [ device ] = devices
    const { name, type, description, image, pricings } = device 

    return ( 
      <>
        <HeaderNav/>

        <div className="section landing parallax">
          <div className="container landing-container">
            <h2 className="landing-heading">{name}</h2>
          </div>
        </div>

        <Footer />
      </>
    )
  
}
