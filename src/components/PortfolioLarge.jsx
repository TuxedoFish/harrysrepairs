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
        
        const { title, description, link, image } = this.props

        return (
            <div className={"container info-container " + (index%2==0) ? "parallax" : "no-parallax"}>
                <div className="row">
                    <h5>{title}</h5>
                    <p>{description}</p>
                    <img src={image} width={"500"} height={"500"}/>
                </div>
            </div>
        )
    }
}