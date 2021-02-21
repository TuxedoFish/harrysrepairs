// React Imports
import React from 'react';

// Default Image
import { getURLFromObject } from '../utils/GetObject.js'

// Animation
import { motion } from "framer-motion"

// Components
import {
    Container,
    Column,
    Text
} from '../components'
import {
    Button
} from 'semantic-ui-react'

export default class PortfolioLarge extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        
        const { title, description, url, image, index } = this.props
        const imageURL = getURLFromObject(image)

        const isEven = (index%2==0)

        return (
            <>      
                <Container inverted={isEven}>
                    <Column size="six">
                        <motion.div
                            initial={{opacity: 0, marginLeft: '-100px'}}
                            animate={{opacity: 1, marginLeft: '0px'}}
                            transition={{duration: 1}}
                        >
                            <img className="portfolio-image" src={imageURL}/>
                        </motion.div>
                    </Column>
                    <Column size="six">
                        <Text as="h2" inverted={isEven}>{title}</Text>
                        <Text as="p" inverted={isEven}>{description}</Text>
                        <Button as="a" href={url}>
                            <motion.div
                                style={{width: 'fit-content'}}
                                animate={{ rotate: [0, 10, -10, 5, -5, 0] }}
                                transition={{ yoyo: Infinity, repeatDelay: 3, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
                            >
                                Discover
                            </motion.div>
                        </Button>
                    </Column>
                </Container>
            </>
        )
    }
}