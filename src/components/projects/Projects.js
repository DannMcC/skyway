import React, { Component } from 'react'
import { Link } from 'react-router'
// import ProjectItem from './ProjectItem'
// import data from '../data.json'
import { graphql } from 'react-apollo'
import { queryAllProjects } from '../../graphql'
import ui from '../../ui'
// import withAuth from '../../utils/withAuth'

// @withAuth
@graphql(...queryAllProjects())
class Projects extends Component {

  potato () {
    ui.displayModal('foo')
  }

  projects () {
    if (this.props.queryAllProjects.loading) {
      return <li>Loading...</li>
    }
    return this.props.queryAllProjects.allProjects.map((project, i) => {
      return <div className='projectItem' key={i}>
        <ul>
          <ul>
            <li className='title'><Link to={`/projects/${this.props.id}`}>{project.owner.name} is creating a {project.type}</Link></li>
            <li className='p_desc'>{project.need}</li>
            <li className='p_need'>{project.goal}</li>
          </ul>
          {/* <li className='title'>PROJECT OWNER is making a PROJECT TYPE</li>
          <li>{project.name}</li>
          <li>{project.need}</li> */}
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
        <button onClick={this.potato}>Add Member</button>
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
