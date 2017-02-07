import React, { Component } from 'react'

class PeopleItem extends Component {

  render () {
    const { name, image, email, assets, aboutuser, projecttypes } = this.props
    return <div className='peopleItem'>
      <ul>
        <li className='name'><img src={image} /><h2>{name}</h2></li>
        <li className='p_desc'><p>Email: </p> {email}</li>
        <li className='p_need'><p>Assets: </p>{assets}</li>
        <li className='p_desc'><p />{aboutuser}</li>
        <li className='p_desc'><p>Interest: </p> {projecttypes}</li>
      </ul>
    </div>
  }
}

export default PeopleItem
