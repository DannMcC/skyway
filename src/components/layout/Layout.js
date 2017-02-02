import React, { Component } from 'react'
import SessionButton from '../SessionButton'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element
    // .isRequired
  }

  render () {
    return <div className='layout'>
      <header>
        <h1>Skyway </h1>
        <SessionButton />
      </header>
      <main>
        {this.props.children}
      </main>
    </div>
  }
}
export default Layout
