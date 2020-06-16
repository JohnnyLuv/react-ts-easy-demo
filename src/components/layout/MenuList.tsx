import React, { useEffect, useState } from 'react'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'

import Home from '../../views/Home'
import Banner from '../../views/Banner'
import Member from '../../views/Member'
import USDT from '../../views/financial/USDT'
import CAR from '../../views/financial/CAR'
import VIP from '../../views/setting/VIP'
import Team from '../../views/setting/Team'
import System from '../../views/setting/System'
import Version from '../../views/Version'

import {
  HomeOutlined,
  PictureOutlined,
  TeamOutlined,
  AccountBookOutlined,
  SettingOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons'
import { Menu } from 'antd'
const { SubMenu } = Menu

const menuList = [
  { title: '首页', icon: <HomeOutlined />, path: '/', },
  { title: 'Banner', icon: <PictureOutlined />, path: '/banner', },
  { title: '会员中心', icon: <TeamOutlined />, path: '/member', },
  {
    title: '财务中心', icon: <AccountBookOutlined />,
    children: [
      { title: 'USDT', path: '/financial/usdt', },
      { title: 'CAR', path: '/financial/car', },
    ]
  },
  {
    title: '设置中心', icon: <SettingOutlined />,
    children: [
      { title: 'VIP设置', path: '/setting/vip', },
      { title: '团队设置', path: '/setting/team', },
      { title: '系统设置', path: '/setting/system', },
    ]
  },
  { title: '版本管理', icon: <CloudUploadOutlined />, path: '/version', },
]

function MyMenuList() {
  const history = useHistory()
  const currentPath = history.location.pathname

  const [selectKey, setSelectKey] = useState('')

  function onSelect(menu: any) {
    if (menu.path !== currentPath) history.push(menu.path)
  }

  useEffect(() => {
    menuList.forEach(menu => {
      if (menu.children) {
        menu.children.forEach(child => {
          if (child.path === currentPath) {
            setSelectKey(child.title)
          }
        })
      } else {
        if (menu.path === currentPath) {
          setSelectKey(menu.title)
        }
      }
    })
  }, [currentPath])

  return (
    <Menu theme="dark" mode="inline" defaultOpenKeys={['财务中心', '设置中心']} selectedKeys={[selectKey]}>
      {
        menuList.map(menu => {
          if (menu.children) {
            return (
              <SubMenu key={menu.title} icon={menu.icon} title={menu.title}>
                {
                  menu.children.map(child => {
                    return <Menu.Item key={child.title} onClick={() => onSelect(child)} >{child.title}</Menu.Item>
                  })
                }
              </SubMenu>
            )
          } else {
            return <Menu.Item key={menu.title} icon={menu.icon} onClick={() => onSelect(menu)} >{menu.title}</Menu.Item>
          }
        })
      }
    </Menu>
  )
}

function MyRouter() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/banner' component={Banner} />
      <Route exact path='/member' component={Member} />
      <Route exact path='/financial/usdt' component={USDT} />
      <Route exact path='/financial/car' component={CAR} />
      <Route exact path='/setting/vip' component={VIP} />
      <Route exact path='/setting/team' component={Team} />
      <Route exact path='/setting/system' component={System} />
      <Route exact path='/version' component={Version} />
      <Redirect to='/404' />
    </Switch>
  )
}


export {
  MyMenuList,
  MyRouter
}