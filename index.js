import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import App from './src/App'
import Login from './src/Login'
import Home from './Components/Home'
import Welcome from './Components/Welcome'
import Dares from './Components/Dares'
import cookie from 'react-cookie';
import $ from 'jquery';

const url = "http://betyouwontapi.herokuapp.com"

function authenticate (redirect = false, nextState, replaceState) {
  var token = cookie.load('token');
  console.log("redirect:", redirect)
  console.log("redirect:", nextState)
  if (!token && redirect) {
    browserHistory.push('/#/login')
  }
  return token;
}

function logout() {
  var token = cookie.load('token');
  $.ajax({
      type: "DELETE",
      url: url + '/logout',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Token ' + token
      },
      success: function (data) {
        console.log(data);
        cookie.save('token', '', { path: '/' });
    },
      error: function (data) { console.log(data.statusText); },
      dataType: 'json'
    });
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/login" component={Login} onEnter={authenticate}/>
      <Route path="/logout" onEnter={logout}/>
      <Route path="/welcome" component={Welcome} />
      <Route path="/dares" component={Dares} onEnter={authenticate}/>
    </Route>
  </Router>
), document.getElementById('container'))
