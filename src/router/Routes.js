import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import {
  Switch,
  Redirect
} from 'react-router-dom'
import Route from './Route'
import { reverse } from 'lodash'
import moize from 'moize'
import AuthContainer from '../components/AuthContainer'

import {
  privateRoutes,
  publicRoutes,
  notLoggedRoutes
} from './routePaths'
import NotFoundPage from '../pages/404Page'

const mapStateToProps = () => ({
  isLogged: false
})

const Routes = ({
  isLogged
}) => {
  const defaultPrivateRoute = privateRoutes.find(route => route.default) || { path: '/' }

  const setRoute = route => {
    return route.redirectTo
      ? setRedirect(route)
      : (
        <Route
          key={route.path}
          {...route}
          exact
        />
      )
  }

  /**
   * This preserves the path for redirect to wished page after login
   * @param {*} route
   */
  const setPrivateRoute = route => {
    return setRoute({
      ...route,
      template: isLogged ? route.template : undefined,
      component: isLogged ? route.component : AuthContainer
    })
  }

  const setRedirect = route => (
    <Redirect
      key={route.path}
      from={route.path}
      to={route.redirectTo || defaultPrivateRoute.path}
    />
  )

  const routes = moize(isLogged => {
    const allRoutes = [
      privateRoutes.map(setPrivateRoute),
      notLoggedRoutes.map(isLogged ? setRedirect : setRoute),
      publicRoutes.map(setRoute)
    ]

    /**
     * Two precedence rules:
     * 1 - User is Logged: Private Routes > Public Routes
     * 2 - User is Not Logged: Public Routes > Not Logged Routes > Private Routes
     *
     * These two rules allow overwrites on direction of user status, easing the route configuration.
     */

    return isLogged
      ? allRoutes
      : reverse(allRoutes)
  })

  return (
    <Switch>
      {routes(isLogged)}
      <Route component={NotFoundPage} />
    </Switch>
  )
}

Routes.propTypes = {
  isLogged: PropTypes.bool.isRequired
}

const enhance = compose(
  connect(mapStateToProps)
)

export default enhance(Routes)
