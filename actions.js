export const login = auth => async dispatch => {
  auth.login()
}

export const loginAttempt = auth => async dispatch => {
  try {
    const response = await auth.parseHash()
    dispatch(loginSuccessful(response))
  } catch (error) {
    dispatch(loginError(error.message))
  }
}

export const loginSuccessful = (payload) => ({
  type: 'LOGIN_SUCCESSFUL',
  payload
})

export const loginError = (error) => ({
  type: 'LOGIN_ERROR',
  error
})

export const logout = () => ({
  type: 'LOGOUT'
})