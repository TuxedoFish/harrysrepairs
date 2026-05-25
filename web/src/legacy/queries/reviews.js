import gql from "graphql-tag";

const GET_REVIEWS = gql`
    query Get_Reviews {
            reviews(sort: "Date:DESC", limit: 3) {
            id
            URL
            Date
        }
    }
`;

export {
    GET_REVIEWS
}