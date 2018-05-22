import React, { Component } from 'react';


import Header from './components/Header'
import UserList from './components/UserList'
import CreateUser from './components/CreateUser'

import { Switch, Route, Redirect } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={UserList} />
            <Route exact path="/create" component={CreateUser} />
            {/* <Route exact path="/login" component={Login} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/top" component={LinkList} />
            <Route exact path="/new/:page" component={LinkList} /> */}
          </Switch>
        </div>
      </div>
    )
  }
}

export default App