import fetch from 'isomorphic-fetch'
import cookie from 'react-cookie';
import $ from 'jquery';
import { browserHistory } from 'react-router'

export const url = "http://betyouwontapi.herokuapp.com"
export const routes = {
  login: url + "/login",
  signup: url + "/users/create",
  logout: url + "/logout",
  createDare: url + "/dares/create",
  dares: url + '/dares',
  fundDare: url + "/payments/create"
}

export function authenticate (redirect = false, nextState, replaceState) {
  var token = cookie.load('token');
  console.log("Redirecting!", redirect + " and " + token);
  if (!token && redirect) {
    browserHistory.push('/login')
  }
  return token;
}

export function logout() {
  var token = cookie.load('token');
  $.ajax({
      type: "DELETE",
      url: routes.logout,
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Token ' + token
      },
      success: function (data) {
        console.log(data);
        cookie.save('token', '', { path: '/' });
        window.location = '/'
    },
      error: function (data) { console.log(data.statusText); },
      dataType: 'json'
    });
}
