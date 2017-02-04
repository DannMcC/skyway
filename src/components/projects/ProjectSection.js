import React, { Component } from 'react'
// import data from '../data.json'

class ProjectSection extends Component {

  static propTypes = {
    params: React.PropTypes.object.isRequired
  }

  render () {
    // const project = data.projects.find(p => p.id === this.props.params.id)

    return <section>
      <h2>Foo</h2>
    </section>
  }
}

export default ProjectSection
