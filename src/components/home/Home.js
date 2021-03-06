import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {

  render () {
    return <div className='landing'>
      <div className='home-content'>
        <ul>
          <li className='first'><Link to='/start'>Getting Started</Link></li>
          <li><Link to='/projects'>Projects</Link></li>
          <li><Link to='/people'>People</Link></li>
          <li><Link to='/about'>Our Story</Link></li>
        </ul>
      </div>
    </div>
  }
}

export default Home
