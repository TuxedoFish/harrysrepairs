// Importing React
import React from "react"

// Querying via apollo client
import { useQuery } from "@apollo/client"
import { GET_DEVICES } from "../../queries/repairs/device"

// View component
import DeviceCard from './DeviceCard'
import { Card } from 'semantic-ui-react'

const DeviceOverview = () => {

    const {loading, error, data} = useQuery(GET_DEVICES)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <Card.Group centered>
            {data.devices.map( ({name, type, image, id}) => (
                <DeviceCard name={name} image={image} type={type} id={id} />
            ))}
        </Card.Group>
    )

}

export default DeviceOverview