import React from 'react'

import Router from 'next/router'

import withLoginAttemptAction from '../hocs/withLoginAttemptAction'

class Callback extends React.Component {
  async componentDidMount () {
    await this.props.loginAttempt()
    Router.push('/')
  }
  
  render() {
    return <div>Logging you in. You will be redirected shortly.</div>
  }
}

export default withLoginAttemptAction(Callback)