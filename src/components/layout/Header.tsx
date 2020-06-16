import React from 'react'
import { useHistory } from 'react-router-dom'

import { Layout, Avatar, Button, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
const { Header } = Layout


function MyHeader() {
  const history = useHistory()

  function SignOut() {
    localStorage.clear()
    history.push('/sign-in')
  }

  return (
    <Header className="layout-header" >
      <span className="title">首页</span>
      <Space>
        <Avatar icon={<UserOutlined />} />
        <span>{localStorage.getItem('account')}</span>
        <Button type='link' size='small' onClick={SignOut} >登出</Button>
      </Space>
    </Header>
  )
}

export default MyHeader