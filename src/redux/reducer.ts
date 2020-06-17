const initialState = {
  count: 0,
}

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'ADD_NUM':
      return {
        ...state,
        count: state.count + action.payload.num
      }
    case 'REDUCE_NUM':
      return {
        ...state,
        count: state.count - action.payload.num
      }
    default:
      return state
  }
}

export {
  reducer
}