import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'

import rootReducer, { rootSaga } from './index'

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
  stateReconciler: autoMergeLevel2
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const sagaMiddleware = createSagaMiddleware()

const middlewares = composeEnhancers(
  applyMiddleware(
    sagaMiddleware
  )
)

export default ({ initialState } = {}) => {
  const store = createStore(
    persistedReducer,
    initialState,
    middlewares
  )

  const persistor = persistStore(store)

  sagaMiddleware.run(rootSaga)

  return { store, persistor }
}
