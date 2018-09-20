import { connect } from 'react-redux'

import auth from '../lib/AuthService'
import { login } from '../actions'

const mapDispatchToProps = dispatch => ({
  login: async () => await dispatch(login(auth))
})

export default WrappedComponent => connect(null, mapDispatchToProps)(WrappedComponent)