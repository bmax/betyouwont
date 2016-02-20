import React from 'react'
import cookie from 'react-cookie';
import $ from 'jquery';


const url = "http://betyouwontapi.herokuapp.com"
const routes = {
  login: url + "/login",
  signup: url + "/signup"
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
          me.setState({success: "Success, Welcome!"});
          console.log(data);
          cookie.save('token', data.token, { path: '/' });
      },
        error: function (data) { me.setState({message: "Failure! - " + data.responseJSON['error']}); },
        dataType: 'json'
      });
  },
  renderForm() {
    return (
    <form className="form-signin">
    {this.state.message}
       <input type="text" className="form-control" placeholder="Email" id="email" value={this.state.email} onChange={this.onChange} required autofocus />
       <input type="password" className="form-control" placeholder="Password" id="password" value={this.state.password} onChange={this.onChange} required />
       <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={this.onLogin}>Sign in</button>
    </form>)
  },
  render() {
    return <div>
      {this.state.success || this.renderForm()}
    </div>
   }
})
