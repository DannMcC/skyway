import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './layout/Layout'
import Home from './home/Home'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <Route path='/' component={Home} />
      </Route>
    </Router>
  }
}

export default App
