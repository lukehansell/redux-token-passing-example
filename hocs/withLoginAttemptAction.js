import { connect } from 'react-redux'

import auth from '../lib/AuthService'
import { loginAttempt } from '../actions'

const mapDispatchToProps = dispatch => ({
  loginAttempt: async () => await dispatch(loginAttempt(auth))
})

export default WrappedComponent => connect(null, mapDispatchToProps)(WrappedComponent)