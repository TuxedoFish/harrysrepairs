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

export default class PortfolioLarge extends React.Component {
    
    constructor(props) {
        super(props)
    }
    
    render() {
        
        const { title, description, link, image, index } = this.props

        const isEven = (index%2==0)

        if(isEven) {
            // Parallax and left aligned
            return (
                <div className={"parallax"}>
                    <div className="wide-container">
                        <div class="row portfolio-row">
                            <div className="one-third column">
                                <img className="portfolio-image" src={image}/>
                            </div>
                            <div className="two-thirds column portfolio-content">
                                <h2>{title}</h2>
                                {description.map( paragraph => (
                                    <p>{paragraph}</p>
                                ))}
                                <a className="button button-primary" href={link}>Discover</a>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            // White background and right aligned
            return (
                <div className={"info"}>
                    <div className="wide-container">
                        <div class="row portfolio-row">
                            <div className="two-thirds column portfolio-content portfolio-content-right">
                                <h2 className="dark-heading">{title}</h2>
                                {description.map( paragraph => (
                                    <p>{paragraph}</p>
                                ))}
                                <a className="button button-primary" href={link}>Discover</a>
                            </div>
                            <div className="one-third column">
                                <img className="portfolio-image" src={image}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}