import React from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom"
import './assets/style/app.sass'

import Layout from './views/Layout'
import SignIn from './views/SignIn'
import NotFound from './views/NotFound'

function App() {
  return (
    <Router>
      <Route path='/sign-in' component={SignIn} />
      <Route path='/404' component={NotFound} />
      <Route path='/' component={Layout} />
    </Router>
  )
}

export default App
