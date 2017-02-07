import React, { Component } from 'react'

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
    const { name, id, image, email, assets } = this.props
    return <div className='peopleItem'>
      <ul>
        <li className='name'><img src={image} />{name}</li>
        <li className='p_desc'>{email}</li>
        <li className='p_need'>{assets}</li>
      </ul>
    </div>
  }
}

export default PeopleItem
