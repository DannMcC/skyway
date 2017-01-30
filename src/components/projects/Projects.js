import React, { Component } from 'react'
// import { Link } from 'react-router'
import ProjectItem from './ProjectItem'
import data from './data.json'

class Projects extends Component {

  render () {
    const projects = data.projects.map((project, i) => {
      return <ProjectItem {...project} key={i} />
    })

    return <div className='projects'>
      <h2>Projects</h2>
      <h1>HAHAHAHHAHA</h1>

      <section className='categories'>
        <table>
          <tbody>
            {projects}
          </tbody>
        </table>
      </section>
    </div>
  }
}

export default Projects
