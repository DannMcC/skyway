import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { graphql } from 'react-apollo'
import withAuth from '../../utils/withAuth'
import {
  mutationCreateProfile,
  queryUserOwnedProjects
} from '../../graphql'

@withAuth
@graphql(...mutationCreateProfile())
class Profile extends Component {

  state = {
    assets: '',
    aboutuser: '',
    projecttypes: ''
  }

  _newProfile = (event) => {
    event.preventDefault()
    this.props.mutationCreateProfile({
      variables: {
        ownerId: this.props.client.userId,
        assets: this.state.assets,
        aboutuser: this.state.aboutuser,
        projecttypes: this.state.projecttypes
      },
      refetchQueries: [{
        query: queryUserOwnedProjects(false)
      }]
    }).then(({data}) => {
      browserHistory.push(`/projects/${data.createProject.id}`)
    })
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    return <div className='profile' >
      <div className='comp-top'>
        <h1 className='comp-head'>Create a Profile</h1>
        <h1 className='comp-exit'><Link to='/projects'>X</Link></h1>
      </div>
      <ul className='submitForm'>
        <form onSubmit={this._newProfile}>
          <li className='assets'>
            What sort of what sort of assets (software, equipment skills) do you have access to?
            <textarea type='text' maxLength='30' value={this.state.assets} name='assets' onChange={this.handleInputChange} />
          </li>
          <li className='projecttypes'>
            What sort of projects are you interested in working on?
            <textarea type='text' value={this.state.projecttypes} name='projecttypes' onChange={this.handleInputChange} />
          </li>
          <li className='aboutuser'>
            Briefly descibe yourself and your skills.
            <textarea type='text' value={this.state.aboutuser} name='aboutuser' onChange={this.handleInputChange} />
          </li>
          <button type='submit'> SUBMIT</button>
        </form>
      </ul>
    </div>
  }
}

export default Profile
