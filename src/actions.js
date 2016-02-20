import fetch from 'isomorphic-fetch'

export const CREATE_USER = 'CREATE_USER'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

const url = "http://betyouwontapi.herokuapi.com"
const routes = {
  login: url + "/login",
  signup: url + "/signup"
}

export function createUser(user) {
  return {
    type: CREATE_USER,
    user
  }
}

export function receiveUser(user, json) {
  return {
    type: RECEIVE_USER,
    user,
    res: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function loginError(error) {
  return { type: LOGIN_ERROR, error: error };
}

export function loginSuccess(response) {
  return dispatch => {
    dispatch({ type: LOGIN_SUCCESS, res: response });
    router.transitionTo('/welcome');
  };
}

export function login(data) {
  return dispatch => {
    fetch(routes.login, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        console.log(response);
        dispatch(loginSuccess(response));
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        dispatch(loginError(error));
        throw error;
      }
    })
    .catch(error => { console.log('request failed', error); });
  }
}