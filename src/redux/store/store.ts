import {composeWithDevTools} from '@redux-devtools/extension'
import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'

import createSagaMiddleWare from 'redux-saga'
import {initialState} from '../init/initialState';
import {rootReducer} from '../reducers/rootReducer';
import {translateWatcher} from '../sagas/translateSaga';

const saga = createSagaMiddleWare()

export const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk, saga))
)

saga.run(translateWatcher)
