## Reference 
- https://scotch.io/tutorials/implementing-graphql-in-react-using-apollo

## Install
- ref https://www.howtographql.com/react-apollo/1-getting-started/
```
    npm i -S apollo-client-preset react-apollo graphql-tag graphql
```
- apollo-client-preset offers some convenience by bundling several packages you need when working with Apollo Client:
    - apollo-client
    - apollo-cache-inmemory
    - apollo-link
    - apollo-link-http

- react-apollo contains the bindings to use Apollo Client with React.

- graphql-tag is a GraphQL parser. Every GraphQL operation you hand over to Apollo Client will have to be parsed by the gql function.

- graphql contains Facebook’s reference implementation of GraphQL - Apollo Client uses some of its functionality.

## Config apollo client in index.js
In contrast to working with REST APIs, you don’t have to deal with constructing your own HTTP requests any more.
Instead you can simply write queries and mutations and send them using an **ApolloClient** instance.


## Writing GraphQL query 
When using Apollo, you’ve got two ways of sending queries to the server.

- Directly use the query method on the ApolloClient directly.  This is a very direct way of fetching data and will allow you to process the response as a promise.
```
client.query({
  query: gql`
    query FeedQuery {
      feed {
        links {
          id
        }
      }
    }
  `
}).then(response => console.log(response.data.allLinks))
```
-  Use Apollo’s higher-order component graphql to wrap your React component with a query.
```
    // 1
    const FEED_QUERY = gql`
    # 2
    query FeedQuery {
        feed {
        links {
            id
            createdAt
            url
            description
        }
        }
    }
    `

    // 3
    export default graphql(FEED_QUERY, { name: 'feedQuery' }) (LinkList)
```

