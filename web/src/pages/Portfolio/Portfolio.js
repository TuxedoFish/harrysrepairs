// React Imports
import React from 'react'

// Component Files
import PortfolioLarge from '../../components/PortfolioLarge.jsx'
import { 
  NavBar, 
  Footer,
  Loader,
  Container,
  Text
} from '../../components/'
import {
    Button
} from 'semantic-ui-react'

// Querying via apollo client
import { useQuery } from "@apollo/client"
import { GET_PORTFOLIO } from '../../queries/portfolio.js'

const Portfolio = () => {

  const {loading, error, data} = useQuery(GET_PORTFOLIO)

  return ( 
      <>
        <NavBar />

        <Container hero>
          <Text as="h2" align="center">Harry Liversedge</Text>
          <Button as="a" href="mailto:harry@harrysrepairs.co.uk" style={{width: '150px'}} align="center">Email Me</Button>
        </Container>

        { !loading ? (
          data.portfolios.map( (app, index) => (
            <PortfolioLarge
              index={index} 
              title={app.title}
              description={app.description}
              url={app.url}
              image={app.image}
            />
          ))
        ) : (
          <Container inverted>
            <Loader />
          </Container>
        )}

        <Footer />
      </>
    )
}

export default Portfolio
