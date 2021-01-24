// React Imports
import React from 'react'

// To get image from the graphql output
import { getURLFromObject } from "../../utils/GetObject"

// UI Components
import {
    Card,
    Image
} from 'semantic-ui-react'

const DevicePricing = ({name, amount, image}) => {

    const imageURL = getURLFromObject(image)

    return (
        <Card className="device-pricing">
            <Card.Content>
                <Card.Header>{name}</Card.Header>
            </Card.Content>
            <Image src={imageURL} wrapped ui={false} />
            <Card.Content>
                <Card.Description className="repair-price-text">{`£${amount.toFixed(2)}`}</Card.Description>
            </Card.Content>
        </Card>
    )
}

export default DevicePricing