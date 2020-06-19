const keyActon = {
  reset: () => {
    return { type: 'RESET_NUM' }
  }
}

const keyState = (state = {
  value: 0,
}, action: any) => {
  switch (action.type) {
    case 'RESET_NUM':
      return { ...state, value: 0 }
    default:
      return state
  }
}

export {
  keyState,
  keyActon,
}