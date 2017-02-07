import React, { Component } from 'react'
import { Link } from 'react-router'
import PeopleItem from './PeopleItem'
import { graphql } from 'react-apollo'
import { queryAllPeople } from '../../graphql'

@graphql(...queryAllPeople())
class People extends Component {

  people () {
    if (this.props.queryAllPeople.loading) {
      return <li>Loading...</li>
    }
    return this.props.queryAllPeople.allUsers.map((people, i) => {
      return <PeopleItem {...people} key={i} />
    })
  }

  render () {
    return <div className='people'>
      <div className='comp-top'>
        <h1 className='comp-head'>People</h1>
        <h1 className='comp-exit'><Link to='/'>X</Link></h1>
      </div>
      <ul className='peopleList'>
        {this.people()}
      </ul>
    </div>
  }
  }

export default People
