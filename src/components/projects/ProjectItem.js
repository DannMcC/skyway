import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import { queryAllProjects } from '../../graphql'
import { Link } from 'react-router'

class ProjectItem extends Component {

  static propTypes = {
    // name: 'PROJECT',
    // description: 'WE GUN MAKE A MOOOVIE',
    // need: 'LITERALLY EVERYTHING'
    // id: React.PropTypes.string.isRequired,
    // user: React.PropTypes.string.isRequired,
    // title: React.PropTypes.string.isRequired,
    // goal: React.PropTypes.string.isRequired,
    // type: React.PropTypes.string.isRequired,
    // description: React.PropTypes.string.isRequired,
    // need: React.PropTypes.string.isRequired
  }

  render () {
    return <div className='projectItem'>
      <ul>
        <li className='title'><Link to={`/projects/${id}`}>{user} is creating a {this.props.type}</Link></li>
        <li className='p_desc'>{goal}</li>
        <li className='p_need'>{need}</li>
      </ul>
    </div>
  }
}

export default ProjectItem
