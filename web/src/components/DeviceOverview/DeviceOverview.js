// Importing React
import React from "react"

// Querying via apollo client
import { useQuery } from "@apollo/client"
import GET_DEVICES_QUERY from "../../queries/repairs/device"

// View component
import DeviceCard from './DeviceCard'
import { Card } from 'semantic-ui-react'

export default function DeviceOverview() {

    const {loading, error, data} = useQuery(GET_DEVICES_QUERY)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    return (
        <Card.Group centered>
            {data.devices.map( ({name, type, description, image}) => (
                <DeviceCard name={name} description={description} image={image} type={type} />
            ))}
        </Card.Group>
    )

}