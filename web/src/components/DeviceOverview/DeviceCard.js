// React import
import React from "react"
import { Link } from "react-router-dom"

// Semantic UI components
import {
    Card,
    Button,
    Image
} from 'semantic-ui-react'
import { getURLFromObject } from "../../utils/GetObject"

const ViewButton = (name) => (
    <Link to={`/device/${name}`}>
        <Button primary>
            View
        </Button>
    </Link>
  )

const DeviceCard = ({name, type, image, urlName, id}) => {

    const imageURL = getURLFromObject(image)

    return (
        <Card className="device-homepage-card">
            <Image src={imageURL} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{type}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                {ViewButton(urlName)}
            </Card.Content>
        </Card>
    )
}

export default DeviceCard