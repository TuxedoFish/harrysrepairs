// Importing React
import React, { useState, useEffect } from "react"

// Querying via apollo client
import { useQuery } from "@apollo/client"
import { GET_DEVICES } from "../../queries/device"

// View component
import DeviceCard from './DeviceCard'
import { 
    Card,
    Button
} from 'semantic-ui-react'
import { 
    Loader
} from '../../components/'

const DeviceOverview = () => {

    const {loading, error, data} = useQuery(GET_DEVICES)

    const [ isViewingMore, setIsViewingMore ] = useState(false)
    const [ height, setHeight ] = useState(0)
    
    const ref = React.useRef();
    useEffect(() => {

        console.log("Ref Updated:")

        if(ref.current) {
            console.log(ref.current.clientHeight)
            setHeight(ref.current.clientHeight)

            window.setInterval(() => {
                console.log(`UPDATE: ${ref.current.clientHeight}`)
                setHeight(ref.current.clientHeight)
            }, 100)
        }
        
    }, [ref.current])

    if (loading) {
        return <div ref={ref}>
            <Loader>Loading</Loader>
        </div>
    }

    if (error) {
        console.log(`Error at DeviceOverview loading graphql data: ${error}`)
        return <p>{`Error :( ${error}`}</p>
    }

    const onViewMore = () => { setIsViewingMore(true) }
    const ITEMS_PER_ROW = 7

    return (

        <div className="device-container" style={{height: height + "px"}}>

            <div ref={ref}>
                <Card.Group itemsPerRow={ITEMS_PER_ROW} className="device-card-holder">

                    {data.devices.slice(0, isViewingMore ? data.devices.length : ITEMS_PER_ROW)
                        .map( ({name, type, image, id, urlName}) => (
                            <DeviceCard name={name} image={image} type={type} id={id} urlName={urlName} />
                        ))
                    }

                </Card.Group>

                { !isViewingMore && <Button onClick={onViewMore} primary>View More</Button> }
            </div>

        </div>

    )

}

export default DeviceOverview