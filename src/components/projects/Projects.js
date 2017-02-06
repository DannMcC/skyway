import React, { Component } from 'react'
import { Link } from 'react-router'
import ProjectItem from './ProjectItem'
import data from '../data.json'
import { graphql } from 'react-apollo'
import {queryUserOwnedProjects} from '../../graphql'
// import withAuth from '../../utils/withAuth'

// @withAuth
@graphql(...queryUserOwnedProjects())
class Projects extends Component {

  projects () {
    if (this.props.queryUserOwnedProjects.loading) {
      return <li>Loading...</li>
    }
    return this.props.queryUserOwnedProjects.user.ownedProjects.map((project, i) => {
      console.log(project.memberships)
      return <div className='projectItem' key={i}>
        <ul>
          <ul>
            <li className='title'><Link to={`/projects/${this.props.id}`}>{project.owner} is creating a {project.type}</Link></li>
            <li className='p_desc'>{project.need}</li>
            <li className='p_need'>{project.goal}</li>
          </ul>
          <li className='title'>PROJECT OWNER is making a PROJECT TYPE</li>
          <li>{project.name}</li>
          <li>members</li>
        </ul>
        <table>
          <tbody>
            {project.users.map((user, i) => {
              return <tr key={i}>
                <td><img src={user.image} /></td>
                {/* <td>{user.name}</td>
                <td>{user.email}</td> */}
              </tr>
            })}
          </tbody>
        </table>
        <button>Add Member</button>
      </div>
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
