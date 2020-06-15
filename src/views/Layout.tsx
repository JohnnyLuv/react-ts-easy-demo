import React from 'react'

import '../assets/style/layout.sass'

import Home from './Home'

export default (props: any) => {
  console.log(props)

  return (
    <div className="layout-wrap">
      <nav className="layout-sider">
        <div className="layout-logo">SYSTEM</div>
        <ul className="layout-menu-list">
          <li className="menu-item">nav1</li>
          <li className="menu-item">nav2</li>
          <li className="menu-item">nav3</li>
          <li className="menu-item">nav4</li>
          <li className="menu-item">nav5</li>
        </ul>
      </nav>
      <div className="layout-container">
        <header className='layout-header'>
          <span>@Johnny signout</span>
        </header>

        <div className="layout-content">
          <Home />
        </div>

        <footer className='layout-footer'>©2020 Created by ZhengTou Tech</footer>
      </div>
    </div>
  )
}