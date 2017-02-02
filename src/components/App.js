import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './layout/Layout'
import People from './people/People'
import About from './about/About'
import Home from './home/Home'
import Projects from './projects/Projects'
import ProjectSection from './projects/ProjectSection'
import Submit from './submit/Submit'

class App extends Component {

  render () {
    return <Router history={browserHistory}>
      <Route path='/' component={Layout}>
        <IndexRoute component={Home} />
        <Route path='people' component={People} />
        <Route path='about' component={About} />
        <Route path='Submit' component={Submit} />
        <Route path='projects' component={Projects} />
        <Route path='projects/:id' component={ProjectSection} />
      </Route>
    </Router>
  }
}

export default App
