import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`,
  cache: new InMemoryCache()
});

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