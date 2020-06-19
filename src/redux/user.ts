const initialState = {
  account: 'account',
  level: 12,
}

const userState = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_ACCOUNT':
      return { ...state, account: action.payload.account }
    default:
      return state
  }
}

const userAction = {
  setAccount: (account: String) => {
    return { type: 'SET_ACCOUNT', payload: { account } }
  }
}



export {
  userState,
  userAction,
}