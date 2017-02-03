import React, { Component } from 'react'
import { Link } from 'react-router'
import ProjectItem from './ProjectItem'
import data from '../data.json'
import { graphql } from 'react-apollo'
import UserOwnedProjects from '../../graphql/query/UserOwnedProjects.gql'
// import withAuth from '../../utils/withAuth'

// @withAuth
@graphql(UserOwnedProjects, {name: 'userOwnedProjects'})
class Projects extends Component {

  projects () {
    if (this.props.userOwnedProjects.loading) {
      return <li>Loading...</li>
    }
    return this.props.userOwnedProjects.user.ownedProjects.map((project, i) => {
      return <li key={i}>{project.name}</li>
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
