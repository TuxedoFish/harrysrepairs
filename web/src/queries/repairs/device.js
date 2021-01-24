import gql from "graphql-tag";

const GET_DEVICES_QUERY = gql`
    query Get_Devices {
            devices {
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

export default GET_DEVICES_QUERY;