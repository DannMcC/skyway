import React, { Component } from 'react'
import ui from '../../ui'
import { mutationCreateMembership, queryAllProjects } from '../../graphql'
import { graphql } from 'react-apollo'
import withAuth from '../../utils/withAuth'

// import data from '../data.json'
@graphql(...mutationCreateMembership())
@withAuth
class FullDescription extends Component {

  _submit = () => {
    this.props.mutationCreateMembership({
      variables: {
        userId: this.props.client.userId,
        projectId: this.props.id
      },
      refetchQueries: [{ query: queryAllProjects(false) }]
    }).then(() => {
      ui.dismissModal()
    })
  }

  render () {
    const { need, goal, owner, type, description } = this.props
    // const project = data.projects.find(p => p.id === this.props.params.id)
    return <div>
      <p>{need}</p>
      <p>{type}</p>
      <p>{owner.name}</p>
      <p>{goal}</p>
      <p>{description}</p>
      {/* {this.project()} */}
      <button onClick={this._submit}>JOIN</button>
    </div>
  }
}

export default FullDescription
