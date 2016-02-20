import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import App from './src/App'
import Login from './src/Login'
import Home from './Components/Home'
import Welcome from './Components/Welcome'
import Dares from './Components/Dares'
import cookie from 'react-cookie';

function authenticate (redirect = false, nextState, replaceState) {
  var token = cookie.load('token');
  console.log("redirect:", redirect)
  console.log("redirect:", nextState)
  if (!token && redirect) {
    browserHistory.push('/#/login')
  }
  return token;
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/login" component={Login}/>
      <Route path="/welcome" component={Welcome} />
      <Route path="/dares" component={Dares} onEnter={authenticate}/>
    </Route>
  </Router>
), document.getElementById('container'))