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

export default class PhoneBox extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="one-third column footer-container">
                           <div className="social-media">
                                <a href="https://www.facebook.com/Harrys-Repairs-106851114324167">
                                    💃Facebook
                                </a>
                            </div>
                        </div>
                        <div className="one-third column footer-container">
                           <div className="social-media">
                                <a href="https://twitter.com/devtuxedofish">
                                    💃Twitter
                                </a>
                            </div>
                        </div>
                        <div className="one-third column footer-container">
                           <div className="social-media">
                                <a href="https://www.instagram.com/harrysrepairs/">
                                    💃Instagram
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}