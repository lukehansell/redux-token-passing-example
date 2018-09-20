import { WebAuth } from 'auth0-js'
import { clientID, domain } from '../data/settings'

export class AuthService {
  constructor () {
    this.auth0 = new WebAuth({
      domain,
      clientID,
      scope: 'openid profile',
      responseType: 'token id_token',
      redirectUrl: 'http://redux-token-passing-lukehansellhx.c9users.io:8080/callback'
    })
  }
  
  parseHash () {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, result) => {
        if (err) return reject(false)
        resolve(result)
      })
    })
  }
  
  login = () => {
    this.auth0.authorize()
  }
}

export default new AuthService()