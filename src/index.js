import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react'
import { ThemeProvider } from 'emotion-theming'
import { Global } from '@emotion/core'

import App from './app'
import configureStore from './store/configureStore'
import ds from './utils/ds'

import globalStyles from './index.style'

const { persistor, store } = configureStore()

const onBeforeLift = () => {
  // take some action before the gate lifts
}

const theme = ds

const renderApp = NextApp => {
  render(
    <Provider
      store={store}
    >
      <PersistGate
        loading={null}
        onBeforeLift={onBeforeLift}
        persistor={persistor}
      >
        <Global
          styles={globalStyles}
        />
        <ThemeProvider
          theme={theme}
        >
          <NextApp />
        </ThemeProvider>
      </PersistGate>
    </Provider>,
    document.getElementById('app')
  )
}

renderApp(App)
