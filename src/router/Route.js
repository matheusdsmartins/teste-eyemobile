import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom'

const AppRoute = props => {
  const {
    template: Template,
    component,
    componentProps,
    ...rest
  } = props

  const renderChildren = routeProps => {
    const Component = props.component
    if (Template) {
      return (
        <Template
          location={routeProps.location}
          history={routeProps.history}
          match={routeProps.match}
        >
          <Component
            {...props}
            {...componentProps}
          />
        </Template>
      )
    } else {
      return (
        <Component
          {...props}
          {...componentProps}
        />
      )
    }
  }

  return (
    <Route
      {...rest}
      render={renderChildren}
    />
  )
}

AppRoute.propTypes = {
  component: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
    PropTypes.object
  ]).isRequired,
  template: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func,
    PropTypes.object
  ]),
  componentProps: PropTypes.object
}

export default AppRoute
