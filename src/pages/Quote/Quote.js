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
 } from 'semantic-ui-react';

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
                
                <Container>
                    <Grid centered columns={2}>
                        
                        <div className="small-spacing"></div>

                        <Grid.Column>
                        <Header as="h2" textAlign="center">
                            What phone do you have?
                        </Header>
                        <Segment>
                            <Form size="large">
                            <Form.Input
                                fluid
                                icon="mobile"
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
            </>
        )
    }
  
}