import React, { Component } from 'react'
import SessionButton from '../SessionButton'
import Modal from '../modal/Modal'

class Layout extends Component {

  static propTypes = {
    children: React.PropTypes.element
    // .isRequired
  }

  render () {
    return <div className='layout'>
      <header>
        <h1>Arrendt</h1>
        <SessionButton />
      </header>
      <main>
        {this.props.children}
      </main>
      <Modal />
    </div>
  }
}
export default Layout
