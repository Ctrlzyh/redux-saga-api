import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { defReducer } from './defReducer'
import { defSaga } from './sagas'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(defReducer, {}, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(defSaga);

export default store
