import gql from "graphql-tag";

const GET_PORTFOLIO = gql`
    query Get_Portfolios {
            portfolios(sort: "position:ASC") {
            id
            title
            url
            description
            position
            image {
                formats
            }
        }
    }
`;

export {
    GET_PORTFOLIO
};