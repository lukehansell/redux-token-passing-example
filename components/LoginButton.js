import withLoginAction from '../hocs/withLoginAction'

export const LoginButton = ({
  login = () => {}
}) => (
  <button onClick={() => login()}>Log in</button>
)

export default withLoginAction(LoginButton)