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

    constructor(props) {
        super(props)

        const {
            processorspeed,
            processortype,
            onboardram,
            storage,
            display,
            connectivity,
            wireless,
            bluetooth,
            osinstalled,
            dimensions,
            weight,
            battery,
            color,
            id,
            images
        } = this.props

        var img_src = []
        for(var i=0; i<images; i++) {
            let img = require('../images/marketplace/' + id + "/" + i + '.png')
            img_src.push(img)
        }

        this.state = {
            selected: 0,
            selectedSpecification: 0,
            img_src: img_src,
            specifications: {
                internals: [
                    {
                        title: "Processor speed",
                        value: processorspeed,
                    },
                    { 
                        title: "Processor type",
                        value: processortype , 
                    },
                    { 
                        title: "Onboard RAM", 
                        value: onboardram 
                    },
                ],
                summary: [
                    { 
                        title: "Storage capacity", 
                        value: storage 
                    },
                    { 
                        title: "Display size",
                        value: display 
                    },
                    { 
                        title: "Dimensions",
                        value: dimensions,
                    },
                    { 
                        title: "Average weight",
                        value: weight, 
                    },
                    { 
                        title: "Battery Life",
                        value: battery, 
                    },
                    { 
                        title: "Color",
                        value: color 
                    }, 
                ],
                software: [
                    { 
                        title: "Connectivity",
                        value: connectivity 
                    },
                    { 
                        title: "Wireless standard",
                        value: wireless 
                    },
                    {
                        title: "Bluetooth standard",
                        value: bluetooth, 
                    },
                    { 
                        title: "Operating system",
                        value: osinstalled, 
                    },
                ]
            }
        }
    }

    changeSelected = (index) => {
        this.setState({
            selected: index,
        })
    }

    changeSelectedSpecification = (index) => {
        this.setState({
            selectedSpecification: index,
        })
    }

    render () {

        const { selected, selectedSpecification, 
            specifications, img_src } = this.state
        const { refurbs, name, image_descriptions,
            cost, packaging, isFrontPage, 
            index} = this.props

        const screenshotwidth = `512px`
        const screenshotheight = `512px`
        const image_size = "150px"

        const screenshots = [
            {
                img: defaultImage,
                name: "example",
            },
            {
                img: defaultImage,
                name: "example",
            },
        ]

        return (
            <div className="phone">
                <div className="one-half column screenshot-holder">
                    <div className="carousel-holder">
                        <Carousel
                            showThumbs={false}
                            centerMode={false}
                            showArrows
                            showStatus
                            showIndicators
                        >
                            {
                                img_src.map((img, i) =>
                                    <div key={i}>
                                        <img 
                                            src={img}
                                            width={screenshotwidth}
                                            height={screenshotheight}
                                        />
                                        <p className="legend">{image_descriptions[i]}</p>
                                    </div>
                                )
                            }
                        </Carousel>
                    </div>
                </div>
                <div className="one-half column notes-holder">
                    <h4 className="phone-name">{name}</h4>
                    <div className="options-holder">
                        <ul className="options-list">
                            <li className={selected==0 ? "selected-option" : "option"} onClick={() => { this.changeSelected(0) }}>Buy</li>
                            <li className={selected==1 ? "selected-option" : "option"} onClick={() => { this.changeSelected(1) }}>Notes</li>
                            <li className={selected==2 ? "selected-option" : "option"} onClick={() => { this.changeSelected(2) }}>Specs</li>
                        </ul>
                    </div>

                    {/* Buy */}
                    {selected==0 ? (
                        <div className="info-box purchase">
                            <h4 className="refurbishments-title">
                                Purchase
                            </h4>
                            <div className="purchase-holder">
                                <p className="purchase-info">
                                    Cost: £{cost.toFixed(2)}
                                </p>
                                <p className="purchase-info">
                                    Packaging: £{packaging.toFixed(2)}
                                </p>
                                <p className="purchase-info">
                                    Total: £{(cost + packaging).toFixed(2)}
                                </p>
                            </div>
                            
                            {!isFrontPage ? (
                                <>
                                    <div className="paypal-button-holder">
                                        <PayPalButton
                                            amount={cost + packaging}
                                            currency="GBP"
                                            // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                                            onSuccess={(details, data) => {
                                                alert("Transaction completed by " + details.payer.name.given_name 
                                                + ". Please check your emails for a confirmation email and get in touch with me " +
                                                "at harry@harrysrepairs.co.uk if you have any questions.");
                                        
                                                // OPTIONAL: Call your server to save the transaction
                                                return fetch("/paypal-transaction-complete", {
                                                        method: "post",
                                                        body: JSON.stringify({
                                                        orderId: data.orderID
                                                    })
                                                });
                                            }}
                                            options={{
                                                clientId: "sb",
                                                currency: "GBP"
                                            }}
                                        />
                                    </div>
                                    <p className="purchase-info">
                                        By clicking purchase you agree to our terms and conditions:
                                    </p>
                                    <p className="purchase-info">
                                        <Link to="/terms">Terms and Conditions</Link>
                                    </p>
                                </>
                                ) : (
                                    <div className="paypal-button-holder">
                                        <Link to={"/phone/"+index}>
                                            <div class="button button-primary">
                                                View Item
                                            </div>
                                        </Link>
                                    </div>
                                )}
                        </div>
                    ) : null }

                    {/* Refurbishments */}
                    {selected==1 ? (
                        <div className="info-box refurbishments">
                            <h4 className="refurbishments-title">
                                Refurbishments
                            </h4>
                            <img src={refurb} width={image_size} height={image_size}/>
                            { refurbs.map( (refurb) => 
                                <>
                                    <p className="specification-key">
                                        {"* " + refurb}
                                    </p>
                                </>
                            )}
                        </div>
                    ) : null }

                    {/* Specifications */}
                    {selected==2 ? (
                        <div className="info-box specifications">
                            <ul className="options-list-minor">
                                <li className={selectedSpecification==0 ? "selected-option-minor" : "option-minor"} onClick={() => { this.changeSelectedSpecification(0) }}>Summary</li>
                                <li className={selectedSpecification==1 ? "selected-option-minor" : "option-minor"} onClick={() => { this.changeSelectedSpecification(1) }}>Internals</li>
                                <li className={selectedSpecification==2 ? "selected-option-minor" : "option-minor"} onClick={() => { this.changeSelectedSpecification(2) }}>Software</li>
                            </ul>
                            { selectedSpecification==0 ? specifications.summary.map( (specification) => 
                                <>
                                    <p className="specification-key">
                                        {specification.title}
                                    </p>
                                    <p className="specification-value">
                                        {specification.value}
                                    </p>
                                </>
                            ) : null }
                            { selectedSpecification==1 ? specifications.internals.map( (specification) => 
                                <>
                                    <p className="specification-key">
                                        {specification.title}
                                    </p>
                                    <p className="specification-value">
                                        {specification.value}
                                    </p>
                                </>
                            ) : null}
                            { selectedSpecification==2 ? specifications.software.map( (specification) => 
                                <>
                                    <p className="specification-key">
                                        {specification.title}
                                    </p>
                                    <p className="specification-value">
                                        {specification.value}
                                    </p>
                                </>
                            ) : null}
                        </div>
                    ) : null }

                </div>
            </div>
        )
    }
}