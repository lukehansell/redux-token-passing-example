import { Fragment } from 'react'
import withLoggedInFlag from '../hocs/withLoggedInFlag'

export const LoggedInSwitch = ({ isLoggedIn, children }) => (
  <Fragment>
    {children(isLoggedIn)}
  </Fragment>
)

export default withLoggedInFlag(LoggedInSwitch)