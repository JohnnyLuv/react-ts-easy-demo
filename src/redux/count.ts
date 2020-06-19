const countState = (state = {
  count: 0,
}, action: any) => {
  switch (action.type) {
    case 'RESET_NUM':
      return { ...state, count: 0 }
    case 'ADD_NUM':
      return { ...state, count: state.count + action.payload.num }
    case 'REDUCE_NUM':
      return { ...state, count: state.count - action.payload.num }
    default:
      return state
  }
}

const countAction = {
  add: (num: Number) => {
    return { type: 'ADD_NUM', payload: { num } }
  },
  reduce: (num: Number) => {
    return { type: 'REDUCE_NUM', payload: { num } }
  },
  rerset: () => {
    return { type: 'RESET_NUM' }
  }
}

export {
  countState,
  countAction,
}