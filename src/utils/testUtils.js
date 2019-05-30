import React from 'react'
import { Router } from 'react-router-dom'
import { render } from 'react-testing-library'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import configureStore from '../store/configureStore'
import { compose } from 'redux'
import configureMockStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga'

import { appReducer, rootSaga } from '../store/index'

// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState or the entire store that the ui is rendered with
const wrapWithRedux = (
  options
) => ({ ui, ...rest }) => {
  const currentOptions = options || {}
  const {
    initialState,
    store = configureStore({ initialState }).store
  } = currentOptions

  return {
    ui: <Provider store={store}>{ui}</Provider>,
    store,
    ...rest
  }
}

export const renderWithRedux = (WrappedComponent, options = {}) => {
  const wrapped = wrapWithRedux(options)({ ui: WrappedComponent })
  const {
    ui,
    ...rest
  } = wrapped

  return {
    ...render(ui),
    ...rest
  }
}

// this is a handy function that I would utilize for any component
// that relies on the router being in context
const wrapWithRouter = (
  options
) => ({ ui, ...rest }) => {
  const currentOptions = options || {}
  const {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] })
  } = currentOptions

  return {
    ui: <Router history={history}>{ui}</Router>,
    history,
    ...rest
  }
}

export const renderWithRouter = (WrappedComponent, options = {}) => {
  const wrapped = wrapWithRouter(options)({ ui: WrappedComponent })
  const {
    ui,
    ...rest
  } = wrapped

  return {
    ...render(ui),
    ...rest
  }
}

const mockedWrappers = (
  routerOptions,
  reduxOptions
) => WrappedComponent => {
  const enhancedComponent = compose(
    wrapWithRouter(routerOptions),
    wrapWithRedux(reduxOptions)
  )({ ui: WrappedComponent })

  const {
    ui,
    ...rest
  } = enhancedComponent

  return {
    ...render(ui),
    ...rest
  }
}

export const mockAppStore = initialState => {
  const sagaMiddleware = createSagaMiddleware()
  const mockStore = configureMockStore([ sagaMiddleware ])

  const mockedStore = mockStore(appReducer(initialState, { type: 'Mocking' }))
  mockedStore.runSaga = sagaMiddleware.run
  mockedStore.runSaga(rootSaga)

  return mockedStore
}

export default mockedWrappers
