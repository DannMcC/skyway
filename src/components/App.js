import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './layout/Layout'
import Home from './home/Home'
import Projects from './projects/Projects'
import ProjectSection from './projects/ProjectSection'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='projects' component={Projects} />
        <Route path='projects/:id' component={ProjectSection} />
      </Route>
    </Router>
  }
}

export default App
