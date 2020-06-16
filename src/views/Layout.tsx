import React from 'react'
import '../assets/style/layout.sass'

import { MyMenuList, MyRouter } from '../components/layout/MenuList'

import { Layout } from 'antd'
const { Header, Content, Footer, Sider } = Layout


function MyLayout() {
  return (
    <Layout>
      <Sider className='layout-sider'>
        <div className="logo">UCAR SYSTEM</div>
        <MyMenuList />
      </Sider>
      <Layout className="site-layout">
        <Header className="layout-header" />
        <Content className='layout-content'>
          <MyRouter />
        </Content>
        <Footer className='layout-footer'>©2020 Created by ZhengTou Tech</Footer>
      </Layout>
    </Layout>
  )
}

export default MyLayout