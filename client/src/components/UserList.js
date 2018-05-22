import React, { Component } from 'react'

import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import User from './User'

class UserList extends Component {
    render() {
        //   const usersToRender = [
        //     {
        //       id: '1',
        //       name: 'Ben',
        //       age: 99,
        //     },
        //     {
        //       id: '2',
        //       name: 'Lily',
        //       age: 14,
        //     },
        //   ]

        if (this.props.fetchUserResult && this.props.fetchUserResult.loading) {
            return <div>Loading</div>
        }

        if (this.props.fetchUserResult && this.props.fetchUserResult.error) {
            return <div>Error</div>
        }

        const usersToRender = this.props.feedQuery.fetchUserResult.users

        return (
            <div>{usersToRender.map(user => <User key={user.id} user={user} />)}</div>
        )
    }
}
const FETCH_USERS_QUERY = gql`
    query {
        users {
            id
            name
        }
    }
`
//sending queries to the server by wrapping React component with a query.
// Apollo injected a new prop nameed 'fetchUserResult' into the component, 
//  the injected prop would be called 'data' by default.
export default graphql(FETCH_USERS_QUERY, {name: 'fetchUserResult'}) (UserList)