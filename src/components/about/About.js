import React, { Component } from 'react'
import { Link } from 'react-router'

class About extends Component {

  render () {
    return <div className='about' >
      <div className='comp-top'>
        <h1 className='comp-head'>About</h1>
        <h1 className='comp-exit'><Link to='/'>X</Link></h1>
      </div>
      <div className='about'>
        <h1>Arrendt</h1>
        <h2>/'arənt/</h2>
        <p className='quote'>"Thought and action must never part company" -Hannah Arendt</p>
        <p className='about-text'>There is a disconnect between people with will and people with means to create things. The goal of Arrendt is to connect those people by providing a platform for people who have skills or access to equipment to meet up with people with inspiration to create something (a movie, a magazine, web series etc).</p>
      </div>
    </div>
  }
}

export default About
