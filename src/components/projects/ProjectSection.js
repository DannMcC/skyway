import React, { Component } from 'react'
import { Link } from 'react-router'
import ui from '../../ui'
import FullDescription from './FullDescription'

// import data from '../data.json'

class ProjectSection extends Component {

  potato = () => {
    ui.displayModal(<FullDescription {...this.props} />)
  }

  render () {
    const { id, need, goal, users, owner, type } = this.props
    const NewName = owner.name.split(' ')
    return <div className='projectItem'>
      <ul>
        <li className='title'><a onClick={this.potato}>{NewName[0]} is creating a {type}</a></li>
        <li className='p_need'>{goal}</li>
        <li className='p_desc'>{need}</li>
        <li>members</li>
        <div className='members'>
          {users.map((user, i) => {
            return <div className='images' key={i}>
              <img key={i} src={user.image} />
            </div>
          })}
        </div>

      </ul>
      <button onClick={this.potato} className='projectView'>View /Join</button>
    </div>
  }
}

export default ProjectSection
