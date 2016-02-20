import React from 'react'
import Nav from './Nav'
import Header from './Header'
import ListDares from './Dares'

export default React.createClass({
  render() {
   return (
    <div>
    <Nav/>
    <Header/>
    <ListDares />
    </div>
    )
  }
})
