import axios from 'axios'
import Constants from '../constants'

const instance = axios.create({
  baseURL: Constants.API_BASE_URL
});


export default {
  async execute(method, resource, data, config) {
    let accessToken = localStorage.getItem(Constants.ACCESS_TOKEN);
    return instance({
      method: method,
      url: resource,
      data,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin':'*'
      },
      ...config
    })
  },
  login(loginRequest) {
    return this.execute('POST', "/auth/login", loginRequest)
  },
  loginSocial(url) {
    return this.execute('GEt', url,)
  },
  getCurrentUser() {
    if (!localStorage.getItem(Constants.ACCESS_TOKEN)) {
      return Promise.reject("No access token set.");
    }
    return this.execute('GET', "/user/me")
  },
  signup(signupRequest) {
    return this.execute('POST', "/auth/signup", signupRequest)
  }
}

