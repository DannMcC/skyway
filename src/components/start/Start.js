import React, { Component } from 'react'
import { Link } from 'react-router'

class Start extends Component {

  render () {
    return <div className='start' >
      <div className='comp-top'>
        <h1 className='comp-head'>Start your profile</h1>
        <h1 className='comp-exit'><Link to='/'>X</Link></h1>
      </div>
      <h2><Link to='/submit'>Start a Project</Link></h2>
      <h2><Link to='/profile'>Fill out your profile</Link></h2>
    </div>
  }
}

export default Start
