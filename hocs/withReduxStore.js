import React from 'react'
import { initializeStore } from '../store'

const isServer = typeof window === 'undefined'
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__'

const getOrCreateStore = (initialState) => {
  if (isServer) return initializeStore(initialState)
  
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState)
  }
  
  return window[__NEXT_REDUX_STORE__]
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
      
      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      }
    }
    
    constructor (props) {
      super(props)
      this.reduxStore = getOrCreateStore(props.initialReduxState)
    }
    
    render () {
      return <WrappedComponent {...this.props} reduxStore={this.reduxStore} />
    }
  }

  return WithRedux
}