import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { graphql } from 'react-apollo'
import withAuth from '../../utils/withAuth'
import {
  mutationUpdateProfile,
  queryCurrentUser
} from '../../graphql'

@withAuth
@graphql(...queryCurrentUser())
@graphql(...mutationUpdateProfile())
class Profile extends Component {

  state = {
    assets: '',
    aboutuser: '',
    projecttypes: ''
  }

  _newProfile = (event) => {
    event.preventDefault()
    this.props.mutationUpdateProfile({
      variables: {
        userId: this.props.client.userId,
        assets: this.state.assets,
        aboutuser: this.state.aboutuser,
        projecttypes: this.state.projecttypes
      }
    }).then(({data}) => {
      browserHistory.push(`/start/`)
    })
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  componentWillReceiveProps (props) {
    if (!props.queryCurrentUser.loading) {
      this.setState({
        assets: props.queryCurrentUser.user.assets,
        aboutuser: props.queryCurrentUser.user.aboutuser,
        projecttypes: props.queryCurrentUser.user.projecttypes
      })
    }
  }

  render () {
    return <div className='profile' >
      <div className='comp-top'>
        <h1 className='comp-head'>Create a Profile</h1>
        <h1 className='comp-exit'><Link to='/start'>X</Link></h1>
      </div>
      <ul className='profileForm'>
        <form onSubmit={this._newProfile}>
          <li className='assets'>
            What sort of what sort of assets (software, equipment skills) do you have access to?
            <textarea type='text' value={this.state.assets} name='assets' onChange={this.handleInputChange} />
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
