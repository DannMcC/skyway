import React, { Component } from 'react'
import { Link } from 'react-router'

class ProjectItem extends Component {

  static propTypes = {
    // name: 'PROJECT',
    // description: 'WE GUN MAKE A MOOOVIE',
    // need: 'LITERALLY EVERYTHING'
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    need: React.PropTypes.number.isRequired
  }

  render () {
    return <div className='projectItem'>
      <table>
        <tbody>
          <td>
            <th className='p_name'><Link to={`/projects/${this.props.id}`}>{this.props.name}</Link></th>
            <tr className='p_desc'>{this.props.description}</tr>
            <tr className='p_need'>{this.props.need}</tr>
          </td>
        </tbody>
      </table>
    </div>
  }
}

export default ProjectItem
