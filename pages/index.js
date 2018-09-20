import withLoginAction from '../hocs/withLoginAction'

import LoginButton from '../components/LoginButton'
import LoggedInSwitch from '../components/LoggedInSwitch'

const ActiveLoginButton = withLoginAction(LoginButton)

const Index = () => (
  <LoggedInSwitch>
    {(isLoggedIn) => isLoggedIn ? <div>Hi</div> : <ActiveLoginButton />}
  </LoggedInSwitch>
)

export default Index
