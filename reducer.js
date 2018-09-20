export const defaultState = {
  user: {
    status: null,
    error: null,
    token: null
  }
}

export const reducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'LOGIN_ATTEMPT': {
      return {
        ...state,
        user: {
          status: 'attempting',
          error: false,
          token: null
        }
      }
    }
    
    case 'LOGIN_ERROR': {
      return {
        ...state,
        user: {
          status: 'error',
          error: action.error,
          token: null
        }
      }
    }
    
    case 'LOGIN_SUCCESSFUL': {
      console.log(action)
      return {
        ...state,
        user: {
          status: 'success',
          error: null,
          token: action.payload.accessToken
        }
      }
    }
    
    case 'LOGOUT': {
      return {
        ...state,
        user: {
          status: null,
          error: null,
          token: null
        }
      }
    }
    
    default: return state
  }
}

export default reducer