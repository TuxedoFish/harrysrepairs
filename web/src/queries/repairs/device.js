import gql from "graphql-tag";

const GET_DEVICES = gql`
    query Get_Devices {
            devices(sort: "releaseDate:DESC,priority:ASC") {
            id
            type
            name
            description
            image {
                formats
            }
        }
    }
`;

const GET_DEVICE_BY_NAME = (name) => 
    gql`
    query Get_Repairs_By_Device {
        devices (where: { name_eq: "${name}" } ) {
        id
        name
        type
        description
        image {
            formats
        }
        pricings { 
            fullName
            name
            description
            amount
            image {
                formats
            }
            }
        }
    }
    `

export {
    GET_DEVICES,
    GET_DEVICE_BY_NAME
};