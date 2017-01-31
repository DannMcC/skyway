import React, { Component } from 'react'
// import { Link } from 'react-router'
import ProjectItem from './ProjectItem'
import data from './data.json'

class Projects extends Component {

  render () {
    const projects = data.projects.map((project, i) => {
      return <li><ProjectItem {...project} key={i} /></li>
    })

    return <div className='projects'>
      <h1>Projects</h1>
      <ul className='projectList'>
        {projects}
      </ul>
    </div>
  }
}

export default Projects
