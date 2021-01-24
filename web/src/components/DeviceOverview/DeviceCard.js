// React import
import React from "react"
import { Link } from "react-router-dom"

// Semantic UI components
import {
    Card,
    Button,
    Image
} from 'semantic-ui-react'

const ViewButton = (id) => (
    <Link to={`/device/${id}`}>
        <Button>
            View repairs
        </Button>
    </Link>
  )

export default function DeviceCard({name, type, image, id}) {

    // Extract the image url from the Strapi graphql output
    let { formats: { small: { url: imageURL } } } = image

    // Since it is relative to the Strapi backend prepend the URL
    imageURL = `${process.env.REACT_APP_BACKEND_URL}${imageURL}`

    return (
        <Card>
            <Image src={imageURL} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{`Device Type: ${type}`}</Card.Meta>
            </Card.Content>
            <Card.Content extra>
                {ViewButton(id)}
            </Card.Content>
        </Card>
    )
}