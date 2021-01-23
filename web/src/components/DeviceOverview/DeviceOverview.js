import { useQuery } from "@apollo/client"
import React from "react"
import GET_DEVICES_QUERY from "../../queries/repairs/device"

export default function DeviceOverview() {

    console.log("Device Overview")

    // const GET_DEVICES_QUERY = gql`
    // query Get_Devices {
    //         devices {
    //         id
    //         name
    //         description
    //         image {
    //             formats
    //         }
    //     }
    // }
    // `;

    const {loading, error, data} = useQuery(GET_DEVICES_QUERY)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return data.devices.map( ({name, description}) => (
        <div>
            <p>{name}, {description}</p>
        </div>
    ));
}