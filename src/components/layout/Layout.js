import React, { Component } from 'react'
import { Link } from 'react-router'
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
        <div className='flexpush'>
          <h1><Link to='/'>Arrendt</Link></h1>
        </div>
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
