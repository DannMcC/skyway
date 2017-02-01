import React, { Component } from 'react'
import { Link } from 'react-router'

class People extends Component {

  render () {
    return <div className='people' >
      <div className='comp-top'>
        <h1 className='comp-head'>People</h1>
        <h1 className='comp-exit'><Link to='/'>X</Link></h1>
      </div>
    </div>
  }
}

export default People
