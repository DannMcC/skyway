import React, { Component } from 'react'
import { Link } from 'react-router'

class About extends Component {

  render () {
    return <div className='about' >
      <div className='comp-top'>
        <h1 className='comp-head'>About</h1>
        <h1 className='comp-exit'><Link to='/'>X</Link></h1>
      </div>
    </div>
  }
}

export default About
