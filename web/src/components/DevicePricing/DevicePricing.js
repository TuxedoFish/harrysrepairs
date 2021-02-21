// React Imports
import React from 'react'

// To get image from the graphql output
import { getURLFromObject } from "../../utils/GetObject"

// UI Components
import {
    Card,
    Image
} from 'semantic-ui-react'
import {
    Text
} from '../../components'

const DevicePricing = ({name, amount, image}) => {

    const imageURL = getURLFromObject(image)

    return (
        <Card className="device-pricing">
            <Image src={imageURL} wrapped ui={false} />
            <Text as="p" inverted align="center" style={{fontWeight: "bold"}}>{name}</Text>
            <Text as="p" inverted align="center">{`£${amount.toFixed(2)}`}</Text>
        </Card>
    )
}

export default DevicePricing