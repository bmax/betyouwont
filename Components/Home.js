import React from 'react'
import Nav from './Nav'
import Header from './Header'
import ListDares from './Dares'
import Team from './Team'
import { authenticate } from '../src/actions'

export default React.createClass({
  render() {
   return (
    <div>
    <Nav/>
    <Header/>
    <ListDares onEnter={authenticate()}/>
    <Team />
    </div>
    )
  }
})
