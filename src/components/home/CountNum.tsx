import React from 'react'
import { connect } from 'react-redux'

function CountNum(props: any) {
  return (
    <>
      <div>count: {props.countState.count}</div>
      <div>key: {props.keyState.value}</div>
      <div>val: {props.keyState.val}</div>
    </>
  )
}

const mapStateToProps = (state: any) => {
  console.log(state)
  return state
}
export default connect(mapStateToProps)(CountNum)