const initialState = {
  count: 0,
}

const countState = (state = initialState, action: any) => {
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
  rerset: () => {
    return { type: 'RESET_NUM' }
  },
  add: (num: Number) => {
    return { type: 'ADD_NUM', payload: { num } }
  },
  reduce: (num: Number) => {
    return { type: 'REDUCE_NUM', payload: { num } }
  },
}

export {
  countState,
  countAction,
}