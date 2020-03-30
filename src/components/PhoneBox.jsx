// React Imports
import React from 'react';

// Carousel
import { Carousel } from "react-responsive-carousel"

// Default Image
import defaultImage from "../images/marketplace/default.png"

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
        } = this.props

        this.state = {
            selected: 0,
            selectedSpecification: 0,
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

        const { selected, selectedSpecification, specifications } = this.state

        const screenshotwidth = `259px`
        const screenshotheight = `460px`

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
                            centerMode
                            showArrows
                            showStatus
                            showIndicators
                            infiniteLoop
                        >
                            {
                                screenshots.map((screenshot) =>
                                    <div key={screenshot.name}>
                                        <img 
                                            src={screenshot.img}
                                            width={screenshotwidth}
                                            height={screenshotheight}
                                        />
                                        <p className="legend">{screenshot.name}</p>
                                    </div>
                                )
                            }
                        </Carousel>
                    </div>
                </div>
                <div className="one-half column notes-holder">
                    <ul className="options-list">
                        <li className={selected==0 ? "selected-option" : "option"} onClick={() => { this.changeSelected(0) }}>Specifications</li>
                        <li className={selected==1 ? "selected-option" : "option"} onClick={() => { this.changeSelected(1) }}>Refurbishments</li>
                        <li className={selected==2 ? "selected-option" : "option"} onClick={() => { this.changeSelected(2) }}>Purchase</li>
                    </ul>

                    {/* Specifications */}
                    {selected==0 ? (
                        <div className="info-box specifications">
                            <ul className="options-list">
                                <li className={selectedSpecification==0 ? "selected-option" : "option"} onClick={() => { this.changeSelectedSpecification(0) }}>Summary</li>
                                <li className={selectedSpecification==1 ? "selected-option" : "option"} onClick={() => { this.changeSelectedSpecification(1) }}>Internals</li>
                                <li className={selectedSpecification==2 ? "selected-option" : "option"} onClick={() => { this.changeSelectedSpecification(2) }}>Software</li>
                            </ul>
                            { selectedSpecification==0 ? (
                                <h4 className="specification-title">
                                    Summary
                                </h4>
                            ) : null}
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
                            { selectedSpecification==1? (
                                <h4 className="specification-title">
                                    Internals
                                </h4>
                            ) : null}
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
                            { selectedSpecification==2 ? (
                                <h4 className="specification-title">
                                    Software
                                </h4>
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

                    {/* Refurbishments */}
                    {selected==1 ? (
                        <div className="info-box refurbishments">
                            Refurbishments
                        </div>
                    ) : null }

                    {/* Purchase */}
                    {selected==2 ? (
                        <div className="info-box purchase">
                            Purchase
                        </div>
                    ) : null }

                </div>
            </div>
        )
    }
}