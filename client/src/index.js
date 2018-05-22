/*
    In contrast to working with REST APIs, you don’t have to deal with constructing your own HTTP requests any more.
    Instead you can write queries and mutations and send them using an **ApolloClient** instance.
*/
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// 1 importing the required dependencies
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// 2 Create the HttpLink that will connect your ApolloClient instance with the GraphQL API
const httpLink = new HttpLink({ uri: 'http://localhost:4000' })

// 3 instantiate ApolloClient
const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
})

// 4 Finally you render the root component of your React app. The App is wrapped with the higher-order component 
// ApolloProvider that gets passed the client as a prop.
ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
    , document.getElementById('root')
)
registerServiceWorker()