import React, { Component } from 'react'
import { Link, browserHistory } from 'react-router'
import { graphql } from 'react-apollo'
import withAuth from '../../utils/withAuth'
import {
  mutationCreateProject,
  queryUserOwnedProjects
} from '../../graphql'

@withAuth
@graphql(...mutationCreateProject())
class Submit extends Component {

  state = {
    n_title: '',
    n_type: '',
    n_goal: '',
    n_need: '',
    n_description: ''
  }

  _newProject = (event) => {
    event.preventDefault()
    this.props.mutationCreateProject({
      variables: {
        ownerId: this.props.client.userId,
        name: this.state.n_title,
        type: this.state.n_type,
        goal: this.state.n_goal,
        need: this.state.n_need,
        description: this.state.n_description
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
    return <div className='submit' >
      <div className='comp-top'>
        <h1 className='comp-head'>Create a Project</h1>
        <h1 className='comp-exit'><Link to='/start'>X</Link></h1>
      </div>
      <ul className='submitForm'>
        <form onSubmit={this._newProject}>
          <li className='title'>
            What's the working title of your project?
            <input type='text' maxLength='30' value={this.state.n_title} name='n_title' onChange={this.handleInputChange} />
          </li>
          <li className='type'>
            What type of project is it?
            <input type='text' maxLength='15' value={this.state.n_type} name='n_type' onChange={this.handleInputChange} />
          </li>
          <li className='goal'>
            Briefly descibe your project. (if you can'd do it in a sentence or two, rethink your goal)
            <textarea type='text' maxLength='144' value={this.state.n_goal} name='n_goal' onChange={this.handleInputChange} />
          </li>
          <li className='need'>
            What do you need to complete this project?
            <input type='text' value={this.state.n_need} name='n_need' onChange={this.handleInputChange} />
          </li>
          <li className='description'>
            Discribe your project in fuller detail. How people can help/ how you'll use the things you need/ projected timeframe you'd like to start.
            <textarea type='text' value={this.state.n_description} name='n_description' onChange={this.handleInputChange} />
          </li>
          <button type='submit'> SUBMIT</button>
        </form>
      </ul>
    </div>
  }
}

export default Submit
