import React from 'react'
import { Router } from 'react-router-dom'
import Routes from './Routes'
import history from './history'

const AppRouter = () => (
  <Router
    history={history}
  >
    <Routes />
  </Router>
)

export default AppRouter
