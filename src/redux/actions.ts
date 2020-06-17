const addAction = (num: Number) => {
  return {
    type: 'ADD_NUM',
    payload: {
      num,
    }
  }
}

const reduceAction = (num: Number) => {
  return {
    type: 'REDUCE_NUM',
    payload: {
      num,
    }
  }
}

export {
  addAction,
  reduceAction,
}