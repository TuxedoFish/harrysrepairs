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
            View repairs
        </Button>
    </Link>
  )

const DeviceCard = ({name, type, image, id}) => {

    const imageURL = getURLFromObject(image)
    let linkName = name.replaceAll(" ", "-")
    linkName = linkName.replaceAll("/", "-and-")

    return (
        <Card className="device-homepage-card">
            <Image src={imageURL} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{`Device Type: ${type}`}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                {ViewButton(linkName)}
            </Card.Content>
        </Card>
    )
}

export default DeviceCard