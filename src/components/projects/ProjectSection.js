import React, { Component } from 'react'
import ProjectItem from './ProjectItem'
import data from '/data.json'

class ProjectSection extends Component {

  static propTypes = {
    params: React.PropTypes.object.isRequired
  }

  render () {
    const category = data.find(c => c.slug === this.props.params.slug)
    const items = category.items.map((item, i) => {
      return <ProjectItem name={item.name} description={item.description} price={item.need} key={i} />
    })

    return <section>
      <table>
        <tbody>
          {items}
        </tbody>
      </table>
    </section>
  }
}

export default ProjectSection
