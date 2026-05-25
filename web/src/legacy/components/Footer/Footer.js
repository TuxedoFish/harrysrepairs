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
                    <Text as="p" inverted={!inverted}>Software engineer specialising in full stack development in fintech.</Text>
                    <Text as="p" inverted={!inverted}>London, United Kingdom</Text>
                </Column>
                <Column size="four">
                    <Text as="h4" inverted={!inverted}>Links</Text>
                    <Button as="a" href="https://www.linkedin.com/in/harry-liversedge-b490b379/">LinkedIn</Button>
                    <br /><br />
                    <Button as="a" href="https://twitter.com/devtuxedofish">Twitter</Button>
                    <br /><br />
                    <Button as="a" href="https://medium.com/@harryliversedge">Medium</Button>
                </Column>
                <Column size="four">
                    <Text as="h4" inverted={!inverted}>Contact</Text>
                    <Text as="p" inverted={!inverted}>E-mail: harryliversedge@gmail.com</Text>
                </Column>
            </Container>
            {/* Bottom row - social media / copyright / policies */}
            <Container inverted={inverted} padding="2rem 0">
                <Text as="p" align="center" inverted={inverted}>Copyright © 2026 Harry Liversedge</Text>
            </Container>
        </>
    )

}

Footer.defaultProps = {
    inverted: false
}

export default Footer