import React, { Component } from 'react'
import { Link } from 'react-router'
import ProjectSection from './ProjectSection'
// import ProjectItem from './ProjectItem'
// import data from '../data.json'
import { graphql } from 'react-apollo'
import { queryAllProjects, queryUserOwnedProjects } from '../../graphql'
// import withAuth from '../../utils/withAuth'

// @withAuth
@graphql(...queryAllProjects())
@graphql(...queryUserOwnedProjects())
class Projects extends Component {

  projects () {
    if (this.props.queryAllProjects.loading) {
      return <li>Loading...</li>
    }
    return this.props.queryAllProjects.allProjects.map((project, i) => {
      return <ProjectSection {...project} key={i} />
    })

    // return data.projects.map((project, i) => {
    //   return <li key={i}><ProjectItem {...project} /></li>
    // })
  }

  render () {
    return <div className='projects'>
      <div className='comp-top'>
        <h1 className='comp-head'>Projects</h1>
        <h1 className='comp-exit'><Link to='/'>X</Link></h1>
      </div>
      <ul className='projectList'>
        {this.projects()}
      </ul>
    </div>
  }
}

export default Projects
