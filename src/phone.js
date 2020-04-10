// React Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

// All CSS Files
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './css/skeleton.css'
import './css/normalize.css'
import './css/custom.css'

// Component Files
import PhoneBox from './components/PhoneBox.jsx'

// Images

// Phone data
import { phones } from './sales/for_sale.jsx'

class Main extends React.Component {

    renderPhonePage = (props) => (
      <Phone id={props.match.params.index} />
    )

    render() {
      return (
        <main>
          <Switch>
            <Route path='/phone/:index' render={this.renderPhonePage} />
          </Switch>
        </main>
      )
    }

}

export default class Phone extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
    
        const { id } = this.props;
    
        const phone = phones[id];

        return ( 
            <>
            <div class="navbar">
                <div class="container">
                <h4 class="navbar-title">Harry's Repairs</h4>
                </div>
            </div>

            <div class="marketplace parallax">
                
                <h2 class="marketplace-heading">Refurbished Phones</h2>

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

            <div class="footer">
                <div class="container">
                <div class="row">
                    <div class="one-third column footer-container">
                    <p class="social-media">💃Facebook</p>
                    </div>
                    <div class="one-third column footer-container">
                    <p class="social-media">💃Twitter</p>
                    </div>
                    <div class="one-third column footer-container">
                    <p class="social-media">💃Instagram</p>
                    </div>
                </div>
                </div>
            </div>
            </>
        )
    }
}

ReactDOM.render(
    <BrowserRouter>
      <Main />
    </BrowserRouter>,
    document.getElementById(`app`)
)
