import React from 'react'
import { connect } from 'react-redux'
import { countAction } from '../../redux/count'


function mapDispatchToProps(dispatch: any) {
  return {
    sendAdd: (num: Number) => {
      dispatch(countAction.add(num))
    },
    sendReduce: (num: Number) => {
      dispatch(countAction.reduce(num))
    },
    sendReset: () => {
      dispatch(countAction.rerset())
    }
  }
}
function ContButton(props: any) {
  return (
    <>
      <button onClick={() => props.sendAdd(10)}>+10</button>
      <button onClick={() => props.sendReduce(2)}>-2</button>
      <button onClick={() => props.sendReset()}>reset num</button>
    </>
  )
}


export default connect(null, mapDispatchToProps)(ContButton)