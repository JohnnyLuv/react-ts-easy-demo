import React from 'react'
import { connect } from 'react-redux'
import { addAction, reduceAction } from '../../redux/actions'

function ContButton(props: any) {
  function addNum() {
    props.sendAdd(10)
  }

  function reduceNum() {
    props.sendReduce(2)
  }

  return (
    <>
      <button onClick={addNum}>+10</button>
      <button onClick={reduceNum}>-2</button>
    </>
  )
}


function mapDispatchToProps(dispatch: any) {
  return {
    sendAdd: (num: Number) => {
      dispatch(addAction(num))
    },
    sendReduce: (num: Number) => {
      dispatch(reduceAction(num))
    }
  }
}
export default connect(null, mapDispatchToProps)(ContButton)