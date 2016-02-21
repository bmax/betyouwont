import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import { authenticate } from '../src/actions'
import DareModal from './DareModal'

export default React.createClass({
  getInitialState() {
    this.state = {show: false}
    return this.state
  },
  onClose() {
    this.setState(this.getInitialState())
  },
  showModal() {
    this.setState({show: true})
  },
  render() {
   var login = authenticate() ? <li><Link to='logout'>Logout</Link></li> : <li><Link to='login'>Login</Link></li>
   var create_a_dare = authenticate() ?                     <li>
                        <a href="#create" onClick={this.showModal}>Create a Dare</a>
                    </li> : null
    var register = authenticate() ? null : <li><Link to='login'>Register</Link></li>
   return   (
    <div>
    <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand page-scroll" href="#page-top">Bet You Wont!</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#bets">Dares</a>
                    </li>
                    <li>
                        <a className="page-scroll" href="#team">Team</a>
                    </li>
                    {create_a_dare}
                    {login}
                    {register}
                </ul>
            </div>
        </div>
    </nav>
    <DareModal show={this.state.show} onClose={this.onClose}/>
    </div>
    )

  }
})
