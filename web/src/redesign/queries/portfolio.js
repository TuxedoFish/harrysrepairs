import gql from "graphql-tag"

// Matches the Strapi v3 portfolio model after adding the repeatable
// `tags` (project.tag) and `links` (project.link) components.
export const GET_PORTFOLIO = gql`
  query Get_Portfolios {
    portfolios(sort: "position:ASC") {
      id
      title
      description
      position
      tags {
        label
      }
      links {
        label
        url
        type
      }
    }
  }
`
