// React Imports
import React from 'react'

// Component Files
import PhoneBox from '../components/PhoneBox.jsx'
import Footer from '../components/Footer.jsx'

// Images

// Phone data
import { phones } from '../sales/for_sale.jsx'

// Takes index being the phone to be displayed

export default class Phone extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {

        console.log("ENVIRONMENT")
        console.log(process.env.NODE_ENV)
    
        const { index } = this.props;
    
        const phone = phones[index];

        return ( 
            <>
            <div class="navbar">
                <div class="container">
                    <h4 class="navbar-title">Harry's Repairs</h4>
                </div>
            </div>

            <div class="phone-page-holder parallax">
                
                <h2 className="phone-name">{phone.config.name}</h2>

                <div class="container container-marketplace">
                    <div class="row">
                        
                        <PhoneBox
                            cost={phone.config.cost}
                            packaging={phone.config.packaging}
                            id={phone.config.id}
                            images={phone.config.images}
                            image_descriptions={phone.config.image_descriptions}
                            name={phone.config.name}
                            processorspeed={phone.config.processorspeed}
                            processortype={phone.config.processortype}
                            onboardram={phone.config.onboardram}
                            storage={phone.config.storage}
                            display={phone.config.display}
                            connectivity={phone.config.connectivity}
                            wireless={phone.config.wireless}
                            bluetooth={phone.config.bluetooth}
                            osinstalled={phone.config.osinstalled}
                            dimensions={phone.config.dimensions}
                            weight={phone.config.weight}
                            battery={phone.config.battery}
                            color={phone.config.color}
                            refurbs={phone.config.refurbs}
                            index={phone.index}
                            isFrontPage={false}
                        />
                    </div>
                </div>
            </div>

            <Footer />
            </>
        )
    }
}
