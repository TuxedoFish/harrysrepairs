// React Imports
import React from 'react';
import { Link } from "react-router-dom"

// Carousel
import { Carousel } from "react-responsive-carousel"

// Paypal
import { PayPalButton } from "react-paypal-button-v2";

// Default Image
import defaultImage from "../images/marketplace/default.png"
import refurb from "../images/marketplace/refurb.svg"
import { getURLFromObject } from '../utils/GetObject.js'

// Animation
import { motion } from "framer-motion"

export default class PortfolioLarge extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        
        const { title, description, url, image, index } = this.props
        const imageURL = getURLFromObject(image)

        const isEven = (index%2==0)

        if(!isEven) {
            // Parallax and left aligned
            return (
                
                <div className={"parallax"} key={index}>
                    <div className="wide-container">
                        <div class="row portfolio-row">
                            <div className="one-half column">
                                <motion.div
                                    initial={{opacity: 0, marginLeft: '-100px'}}
                                    animate={{opacity: 1, marginLeft: '0px'}}
                                    transition={{duration: 1}}
                                >
                                    <img className="portfolio-image" src={imageURL}/>
                                </motion.div>
                            </div>
                            <div className="one-half column portfolio-content">
                                <h2>{title}</h2>
                                <p>{description}</p>
                                <a href={url}>
                                    <motion.div
                                        style={{width: 'fit-content'}}
                                        animate={{ rotate: [0, 10, -10, 5, -5, 0] }}
                                        transition={{ yoyo: Infinity, repeatDelay: 3, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
                                        className="button button-primary"
                                    >
                                        Discover
                                    </motion.div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            // White background and right aligned
            return (
                <div className={"info"} key={index}>
                    <div className="wide-container">
                        <div class="row portfolio-row">
                            <div className="one-half column portfolio-content portfolio-content-right">
                                <h2 className="dark-heading">{title}</h2>
                                <p>{description}</p>
                                <a href={url}>
                                    <motion.div
                                        style={{width: 'fit-content', marginBottom: '40px'}}
                                        animate={{ rotate: [0, 10, -10, 5, -5, 0] }}
                                        transition={{ yoyo: Infinity, repeatDelay: 4, times: [0, 0.2, 0.4, 0.6, 0.8, 1] }}
                                        className="button button-primary"
                                    >
                                        Discover
                                    </motion.div>
                                </a>
                            </div>
                            <div className="one-half column">
                                <motion.div
                                    style={{width: 'fit-content', marginBottom: '40px'}}
                                    initial={{opacity: 0, marginLeft: '100px'}}
                                    animate={{opacity: 1, marginLeft: '0px'}}
                                    transition={{duration: 1}}
                                >
                                    <img className="portfolio-image" src={imageURL}/>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}