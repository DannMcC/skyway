import React, { Component } from 'react'
import { Link } from 'react-router'
import PeopleItem from './PeopleItem'
import data from '../data.json'

class People extends Component {
  render () {
    console.log(data)
    const people = data.users.map((users, i) => {
      return <li key={i}><PeopleItem {...users} /></li>
    })

    return <div className='people'>
      <div className='comp-top'>
        <h1 className='comp-head'>People</h1>
        <h1 className='comp-exit'><Link to='/'>X</Link></h1>
      </div>
      <ul className='peopleList'>
        {people}
      </ul>
    </div>
  }
  }

export default People
