import React, {Component} from 'react'
import PropTypes from 'prop-types'
import User from './User'

class UserList extends Component {
    render() {
      const usersToRender = [
        {
          id: '1',
          name: 'Ben',
          age: 99,
        },
        {
          id: '2',
          name: 'Lily',
          age: 14,
        },
      ]
  
      return (
        <div>{usersToRender.map(user => <User key={user.id} user={user} />)}</div>
      )
    }
  }
  
  export default UserList