import React, { Component } from 'react'
import { Link } from 'react-router'
import ui from '../../ui'
import AddMember from './AddMember'

// import data from '../data.json'

class ProjectSection extends Component {

  potato = () => {
    ui.displayModal(<AddMember id={this.props.id} />)
  }

  render () {
    // const project = data.projects.find(p => p.id === this.props.params.id)
    const { id, need, goal, users, owner, type } = this.props
    return <div className='projectItem'>
      <ul>
        <li className='title'><Link to={`/projects/${id}`}>{owner.name} is creating a {type}</Link></li>
        <li className='p_desc'>{need}</li>
        <li className='p_need'>{goal}</li>

        {/* <li className='title'>PROJECT OWNER is making a PROJECT TYPE</li>
        <li>{project.name}</li>
        <li>{project.need}</li> */}
        <li>members</li>
        <table>
          <tbody>
            {users.map((user, i) => {
              return <tr key={i}>
                <td><img src={user.image} /></td>
                {/* <td>{user.name}</td>
              <td>{user.email}</td> */}
              </tr>
            })}
          </tbody>
        </table>
      </ul>
      <button onClick={this.potato} className='projectView'>View /Join</button>
    </div>
  }
}

export default ProjectSection
