import React, { Component } from 'react'
import ui from '../../ui'
import { queryCurrentProject } from '../../graphql'
import { graphql } from 'react-apollo'

// import data from '../data.json'
@graphql(...queryCurrentProject())
class ProjectSection extends Component {
  project () {
    if (this.props.queryCurrentProject.loading) {
      return <li>Loading...</li>
    }
    return this.props.queryCurrentProject.CurrentProject.map((project, i) => {
      return <ProjectSection {...project} key={i} />
    })
  }

  _submit = () => {
    // DO THE MUTIATION THEN:
    ui.displayModal()
  }

  render () {
    const { id, need, goal, users, owner, type } = this.props
    // const project = data.projects.find(p => p.id === this.props.params.id)
    return <div>
      <input type='text' />
      <p>{id}</p>
      <p>{need}</p>
      <p>{type}</p>
      <p>{owner}</p>
      {/* {this.project()} */}
    </div>
  }
}

export default ProjectSection
