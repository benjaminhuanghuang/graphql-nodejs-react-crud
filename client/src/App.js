import React from 'react'
import { ApolloProvider } from 'react-apollo';

import UserList from '../containers/UserList'

const App = () => (
  <div>
    <UserList />
  </div>
)

export default App