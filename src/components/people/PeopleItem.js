import React, { Component } from 'react'
import { Link } from 'react-router'

class PeopleItem extends Component {

  static propTypes = {
    // name: 'PROJECT',
    // description: 'WE GUN MAKE A MOOOVIE',
    // need: 'LITERALLY EVERYTHING'
    // id: React.PropTypes.string.isRequired,
    user: React.PropTypes.string.isRequired,
    skills: React.PropTypes.string.isRequired,
    gear: React.PropTypes.string.isRequired
    // type: React.PropTypes.string.isRequired,
    // description: React.PropTypes.string.isRequired,
    // need: React.PropTypes.string.isRequired
  }

  render () {
    return <div className='projectItem'>
      <ul>
        <li className='title'><Link to={`/people/${this.props.user}`}>{this.props.user}</Link></li>
        <li className='p_desc'>{this.props.skills}</li>
        <li className='p_need'>{this.props.gear}</li>
      </ul>
    </div>
  }
}

export default PeopleItem
