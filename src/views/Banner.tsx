import React from 'react'
import { connect } from 'react-redux'

function Banner(props: any) {
  return (
    <>
      <div>Banner page</div>
      <div>{props.countState.count}</div>
    </>
  )
}

const mapStateToProps = (state: any) => state
export default connect(mapStateToProps)(Banner)