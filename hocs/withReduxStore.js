import React from 'react'
import { initializeStore } from '../store'
import auth from '../lib/AuthService'
import { loginAttempt } from '../actions'
import cookies from 'next-cookies'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

const getOrCreateStore = (initialState) => {
  if (isServer) return initializeStore(initialState)
  
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  
  return window[__NEXT_REDUX_STORE__]
}

const parseCookies = cookieString => {
  let cookies = {}
  cookieString.split('; ').
  map(cookie => cookie.split('=')).
  forEach(cookie => {
    cookies[cookie[0]] = cookie[1]
  })
  return cookies
}

export default WrappedComponent => {
  class WithRedux extends React.Component {
    static async getInitialProps (appContext) {
      const reduxStore = getOrCreateStore()
      
      appContext.ctx.reduxStore = reduxStore
      
      let appProps = {}
      if (typeof WrappedComponent.getInitialProps === 'function') {
        appProps = await WrappedComponent.getInitialProps.call(WrappedComponent, appContext)
      }

      let token = null
      // @TODO read cookies and also subscribe to store to set token as cookie
      // when token changes. Then use this token to run the loginAttempt action
      // on the redux state.
      
      const cookieList = cookies(appContext.ctx)
      // if (isServer) {
      //   const cookies = parseCookies(appContext.ctx.req.headers.cookie)
      //   token = cookies.token
      // }
      console.log(cookieList)
      
      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }
    
    constructor (props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
      
      if (!isServer && window.localStorage) {
        this.reduxStore.subscribe(() => {
          window.localStorage.setItem('__APP_STATE__', JSON.stringify(this.reduxStore.getState()))
        })
      }
    }
    
    render () {
      return <WrappedComponent {...this.props} reduxStore={this.reduxStore} />
    }
  }

  return WithRedux
}