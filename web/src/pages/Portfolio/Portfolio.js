// React Imports
import React from 'react'
import { Link } from "react-router-dom"

// Component Files
import PortfolioLarge from '../../components/PortfolioLarge.jsx'
import { 
  NavBar, 
  Footer,
  Loader
} from '../../components/'

// Querying via apollo client
import { useQuery } from "@apollo/client"
import { GET_DEVICE_BY_NAME } from '../../queries/repairs/device.js'

const Portfolio = () => {

  const {loading, error, data} = useQuery(GET_DEVICE_BY_NAME(deviceName))
  console.log(data)

  return ( 
      <>
        <NavBar />

        <div className="section landing parallax">
          <div className="container landing-container">
            <h2 className="landing-heading">Harry Liversedge</h2>
            <a className="button button-primary" href="mailto:harry@harrysrepairs.co.uk" style={{width: '150px'}}>Email Me</a>
          </div>
        </div>

        { loading ? (
          data.map( (app, index) => (
            <PortfolioLarge
              index={index} 
              title={app.title}
              description={app.description}
              link={app.link}
              image={app.image}
            />
          ))
        ) : (
          <div className={"parallax"}>
            <Loader inverted />
          </div>
        )}

        <Footer />
      </>
    )
  }
  
}

export default Portfolio
