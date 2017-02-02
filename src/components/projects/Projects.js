import React, { Component } from 'react'
import { Link } from 'react-router'
import ProjectItem from './ProjectItem'
import data from '../data.json'

class Projects extends Component {

  render () {
    const projects = data.projects.map((project, i) => {
      return <li key={i}><ProjectItem {...project} /></li>
    })

    return <div className='projects'>
      <div className='comp-top'>
        <h1 className='comp-head'>Projects</h1>
        <h1 className='comp-exit'><Link to='/'>X</Link></h1>
      </div>
      <ul className='projectList'>
        {projects}
      </ul>
    </div>
  }
}

export default Projects
