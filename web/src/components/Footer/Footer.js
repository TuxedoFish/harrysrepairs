// React Imports
import React from 'react';

// Components 
import {
    Container,
    Column,
    Text
} from '../../components'
import {
    Button
} from 'semantic-ui-react'

const Footer = ({inverted}) => {

    return (
        <>
            {/* Top information and links */}
            <Container inverted={!inverted}>
                <Column size="four">
                    <Text as="h4" inverted={!inverted}>About</Text>
                    <Text as="p" inverted={!inverted}>Cheap independent electronics repairs in SW10. Specialising in iPhone, iPad and MacBook repairs. Located at:</Text>
                    <Text as="p" inverted={!inverted}>107 Finborough Road</Text>
                    <Text as="p" inverted={!inverted}>Kensington</Text>
                    <Text as="p" inverted={!inverted}>London</Text>
                    <Text as="p" inverted={!inverted}>SW10 9DU</Text>
                </Column>
                <Column size="four">
                    <Text as="h4" inverted={!inverted}>Links</Text>
                    <Button as="a" href="https://www.facebook.com/Harrys-Repairs-106851114324167">Facebook</Button>
                    <br /><br />
                    <Button as="a" href="https://twitter.com/devtuxedofish">Twitter</Button>
                    <br /><br />
                    <Button as="a" href="https://www.instagram.com/harryliversedge/">Instagram</Button>
                </Column>
                <Column size="four">
                    <Text as="h4" inverted={!inverted}>Contact</Text>
                    <Text as="p" inverted={!inverted}>E-mail: harry@harrysrepairs.co.uk</Text>
                    <Text as="p" inverted={!inverted}>Mobile: 07773201051</Text>
                </Column>
            </Container>
            {/* Bottom row - social media / copyright / policies */}
            <Container inverted={inverted} padding="2rem 0">
                <Text as="p" align="center" inverted={inverted}>Copyright © 2021 Harry's Repairs</Text>
            </Container>
        </>
    )

}

Footer.defaultProps = {
    inverted: false
}

export default Footer