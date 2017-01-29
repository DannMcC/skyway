import React, { Component } from 'react'

class ProjectItem extends Component {

  static propTypes = {
    // name: 'PROJECT',
    // description: 'WE GUN MAKE A MOOOVIE',
    // need: 'LITERALLY EVERYTHING'

    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    need: React.PropTypes.number.isRequired
  }

  render () {
    return <tr>
      <th className='p_name'>{this.props.name}</th>
      <td className='p_des'>{this.props.description}</td>
      <td className='p_need'>${this.props.need}</td>
    </tr>
  }
}

export default ProjectItem
