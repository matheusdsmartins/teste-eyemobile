import { combineReducers } from 'redux'
import { all } from 'redux-saga/effects'

import {
  reducers as earningsReducers
} from './modules/earnings'

export function * rootSaga () {
  yield all([])
}

const rootReducer = combineReducers({
  earnings: earningsReducers
})

export default rootReducer
