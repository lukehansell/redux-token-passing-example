import withLoggedInProp from '../hocs/withLoggedInFlag'

import LoginButton from '../components/LoginButton'
import LoggedInSwitch from '../components/LoggedInSwitch'

const Index = () => (
  <LoggedInSwitch>
    {(isLoggedIn) => isLoggedIn ? <div>Hi</div> : <LoginButton />}
  </LoggedInSwitch>
)

export default Index
