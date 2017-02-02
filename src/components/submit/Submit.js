import React, { Component } from 'react'
import { Link } from 'react-router'

class Submit extends Component {

  render () {
    return <div className='submit' >
      <div className='comp-top'>
        <h1 className='comp-head'>Create a Project</h1>
        <h1 className='comp-exit'><Link to='/projects'>X</Link></h1>
      </div>
      <ul className='submitForm'>
        <li className='title'>What's the working title of your project?<input type='text' maxLength='30' /></li>
        <li className='type'>What type of project is it?<input type='text' maxLength='15' /></li>
        <li className='goal'>Briefly descibe your project. (if you can'd do it in a sentence or two, rethink your goal)<textarea type='text' maxLength='144' /></li>
        <li className='need'> What do you need to complete this project?<input type='text' /></li>
        <li className='description'>Discribe your project in fuller detail. How people can help/ how you'll use the things you need/ projected timeframe you'd like to start.<textarea type='text' /></li>
      </ul>
    </div>
  }
}

export default Submit
