import React, { Component } from 'react'
import { Link } from 'react-router'

class ProjectItem extends Component {

  static propTypes = {
    // name: 'PROJECT',
    // description: 'WE GUN MAKE A MOOOVIE',
    // need: 'LITERALLY EVERYTHING'
    id: React.PropTypes.string.isRequired,
    user: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    goal: React.PropTypes.string.isRequired,
    type: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    need: React.PropTypes.string.isRequired
  }

  render () {
    return <div className='projectItem'>
      <ul>
        <li className='title'><Link to={`/projects/${this.props.id}`}>{this.props.user} is creating a {this.props.type}</Link></li>
        <li className='p_desc'>{this.props.goal}</li>
        <li className='p_need'>{this.props.need}</li>
      </ul>
    </div>
  }
}

export default ProjectItem
