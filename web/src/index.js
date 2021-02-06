// React imports
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

// Entry point - router
import App from './App';

// Apollo Client
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

// All CSS Files
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './css/skeleton.css'
import './css/normalize.css'
import './css/custom.scss'

const strapiURI =  `${process.env.REACT_APP_BACKEND_URL}/graphql`
const client = new ApolloClient({
  uri: strapiURI,
  cache: new InMemoryCache()
})

ReactDOM.render(
    (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ApolloProvider>
    ),
    document.getElementById('app')
)