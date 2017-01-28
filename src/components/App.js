import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'

import Layout from './layout/Layout'
import Home from './home/Home'
import Projects from './projects/Projects'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <Route path='/home' component={Home} />
        <Route path='/projects' componet={Projects} />
      </Route>
    </Router>
  }
}

export default App
