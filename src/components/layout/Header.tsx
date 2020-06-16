import React from 'react'
import { Layout, Avatar, Button, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'
const { Header } = Layout


function MyHeader() {
  return (
    <Header className="layout-header" >
      <span className="title">首页</span>
      <Space>
        <Avatar icon={<UserOutlined />} />
        <span>13782890191</span>
        <Button type='link' size='small'>登出</Button>
      </Space>
    </Header>
  )
}

export default MyHeader