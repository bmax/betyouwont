import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import App from './src/App'
import Login from './src/Login'
import Home from './Components/Home'

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/login" component={Login}/>
      <Route path="/contact" component={Login}/>
    </Route>
  </Router>
), document.getElementById('container'))