import React, { Component } from 'react'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element
    // .isRequired
  }

  render () {
    return <div className='layout'>
      <header>
        <h1>Skyway </h1>
        <button> SIGN IN</button>
      </header>
      <main>
        {this.props.children}
      </main>
    </div>
  }
}
export default Layout
