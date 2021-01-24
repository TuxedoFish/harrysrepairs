// React import
import React from "react"

// Semantic UI components
import {
    Card,
    Button,
    Image
} from 'semantic-ui-react'

const extra = (
    <Button>
        View repairs
    </Button>
  )

export default function DeviceCard({name, type, description, image}) {

    // Extract the image url from the Strapi graphql output
    console.log(image)
    let { formats: { small: { url: imageURL } } } = image

    // Since it is relative to the Strapi backend prepend the URL
    imageURL = `${process.env.REACT_APP_BACKEND_URL}${imageURL}`

    return (
        <Card>
            <Image src={imageURL} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{`Device Type: ${type}`}</Card.Meta>
                <Card.Description>
                    {description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                {extra}
            </Card.Content>
        </Card>
    )
}