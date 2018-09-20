import { connect } from 'react-redux'

const mapStateToProps = state => ({
  isLoggedIn: !!state.user.token
})

export default (WrappedComponent) => connect(mapStateToProps)(WrappedComponent)