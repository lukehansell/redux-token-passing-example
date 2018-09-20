import withLoginAction from '../hocs/withLoginAction'
import withLoggedInFlag from '../hocs/withLoggedInFlag'

import LoginButton from '../components/LoginButton'

const ActiveLoginButton = withLoginAction(LoginButton)

const Index = ({ isLoggedIn }) => (
  <div>
    {isLoggedIn ? <div>Hi</div> : <ActiveLoginButton />}
  </div>
)

export default withLoggedInFlag(Index)
