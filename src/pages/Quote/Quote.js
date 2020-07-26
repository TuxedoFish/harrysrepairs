// React Imports
import React from 'react'

// CSS for semantic
import 'semantic-ui-css/semantic.min.css'
import './Quote.scss';

// Components
import Footer from '../../components/Footer.jsx'
import HeaderNav from '../../components/HeaderNav/HeaderNav.jsx';
import { 
    Form, 
    Button,
    Container,
    Grid,
    Header,
    Message,
    Segment,
    Image,
 } from 'semantic-ui-react';
import PhoneBox from '../../components/Footer.jsx';
import iphone from '../../images/iphone.png'

const pricing = [
    {
        name: "iPhone 6",
        price: 50.00,
        image: iphone
    },
    {
        name: "iPhone 6 Plus ",
        price: 60.00,
        image: iphone
    },
    {
        name: "iPhone 7",
        price: 70.00,
        image: iphone
    },
    {
        name: "iPhone 7 Plus",
        price: 70.00,
        image: iphone
    },
    {
        name: "iPhone 8",
        price: 75.00,
        image: iphone
    },
    {
        name: "iPhone 8 Plus",
        price: 80.00,
        image: iphone
    },
    {
        name: "iPhone SE 2",
        price: 75.00,
        image: iphone
    },
]

export default class Quote extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            city: '',
            country: ''
        }
    }

    saveAndContinue = (e) => {
        e.preventDefault()
    }

    render() {

        const { firstName, lastName, email, age, city, country } = this.state;
        const values = { firstName, lastName, email, age, city, country };

        return ( 
            <>
                <HeaderNav/>
                
                <div className="small-spacing"></div>

                <Container>
                    <Grid centered columns={2} doubling>
                        <Grid.Column mobile={8}>
                        <Header as="h1" textAlign="center" color="blue" inverted size="huge">
                            What phone do you have?
                        </Header>

                        <div className="tiny-spacing"></div>

                        <Segment>
                            <Form size="huge">
                            <Form.Input
                                fluid
                                icon="search"
                                iconPosition="left"
                                placeholder="e.g. iPhone 7 Plus"
                            />
                            <Button style={{textAlgin: 'center'}} className="continue-button" onClick={this.saveAndContinue}>Continue</Button>
                            </Form>
                        </Segment>
                        <Message>
                            Any questions? <a  href="mailto:harry@harrysrepairs.co.uk">Email me</a>
                        </Message>
                        </Grid.Column>
                    </Grid>
                </Container>

                <div className="small-spacing"></div>

                <Container>
                    
                    <Grid columns={3} centered doubling className="repair-quote-holder">
                        {pricing.map( (phone, key) => 
                            <Grid.Column key={key} stretched>
                                <Segment>
                                    <Header as="h2" textAlign="center">
                                        {phone.name}
                                    </Header>
                                    <Image src={phone.image} size="small" centered/>
                                    <Header as="h2" textAlign="center">
                                        {"Screen:  £" + phone.price}
                                    </Header>
                                </Segment>
                            </Grid.Column>
                        )}
                    </Grid>
                </Container>

                <div className="small-spacing"></div>
                
                <Footer />
            </>
        )
    }
  
}