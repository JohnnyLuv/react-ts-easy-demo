import React from 'react'
import { connect } from 'react-redux'
import { userAction } from '../redux/user'

function Banner(props: any) {
  function onIptBlur(event: any) {
    // console.log(event.target.value)
    props.accountHandle(event.target.value)
  }

  return (
    <>
      <div>Banner page</div>
      <div>{props.countState.count}</div>
      <input type="text" defaultValue={props.userState.account} onBlur={event => onIptBlur(event)} />
      <div>{props.userState.account}</div>
    </>
  )
}

const mapStateToProps = (state: any) => state
const mapDispatchToProps = (dispatch: any) => {
  return {
    accountHandle: (account: String) => {
      dispatch(userAction.setAccount(account))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Banner)