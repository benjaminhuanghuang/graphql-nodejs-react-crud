import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

const UserList = ({ users}) => (
  <ul>
    {users.map(user=>
      <User
        key={user.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)

export default UserList