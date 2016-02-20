import React from 'react'
import cookie from 'react-cookie';
import { browserHistory } from 'react-router'
import $ from 'jquery';

const url = "http://betyouwontapi.herokuapp.com"
const routes = {
  login: url + "/login",
  signup: url + "/users/create"
}
export default React.createClass({

  getInitialState() {
    this.initialState = {
      email: '',
      password: '',
      message: ''
    }
    this.state = this.initialState
    return this.state
  },
  onChange(e) {
    this.setState({ [e.target.id]: e.target.value.trim() })
  },
  onLogin(e) {
    e.preventDefault()
    const data = { email: this.state.email, password: this.state.password }
    this.setState(this.initialState)
    console.log("Call API", routes.login)
    var me = this;
    $.ajax({
        type: "POST",
        url: routes.login,
        data: data,
        success: function (data) {
          console.log(data);
          cookie.save('token', data.token, { path: '/' });
          browserHistory.push('/#/dares');
      },
        error: function (data) { me.setState({message: "Failure! - " + data.responseJSON['error']}); },
        dataType: 'json'
      });
  },
  onCreate(e) {
    e.preventDefault()
    const data = { email: this.state.email, password: this.state.password, name: this.state.name}
    this.setState(this.initialState)
    console.log("Call API", routes.signup)
    var me = this;
    $.ajax({
        type: "POST",
        url: routes.signup,
        data: data,
        success: function (data) {
          me.setState({success: "Success, Created Account!"});
          console.log(data);
          cookie.save('token', data.token, { path: '/' });
      },
        error: function (data) { me.setState({message: "Failure! - " + data.responseJSON['error']}); },
        dataType: 'json'
      });
  },
  onCreateClick(e) {
    e.preventDefault()
    const data = { email: '', password: '', name: '' }
    this.setState({create: this.getInitialState()})
  },
  renderForm() {
    return (
    <form className="form-signin">
    {this.state.message}
       { this.state.create ? <input type="text" className="form-control" placeholder="Name" id="name" value={this.state.name} onChange={this.onChange} required autofocus /> : null }
       <input type="text" className="form-control" placeholder="Email" id="email" value={this.state.email} onChange={this.onChange} required autofocus />
       <input type="password" className="form-control" placeholder="Password" id="password" value={this.state.password} onChange={this.onChange} required />
       { this.state.create ? <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onCreate}>Create Account</button> : <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onLogin}>Sign in</button> }
       { this.state.create ? null: <button className="btn btn-lg btn-primary btn-block" onClick={this.onCreateClick}>Create Account</button> }
    </form>)
  },
  render() {
    return <div>
      {this.state.success || this.renderForm()}
    </div>
   }
})
