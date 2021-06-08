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

// Google Analytics
if(process.env.NODE_ENV === "production") {
  const script = document.createElement("script")
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`
  document.body.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', process.env.GOOGLE_ANALYTICS_ID)
}

// Strapi CMS
const strapiURI = `${process.env.REACT_APP_BACKEND_URL}/graphql`;
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