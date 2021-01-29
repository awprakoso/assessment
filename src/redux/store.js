import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducer.'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootSaga from './saga';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['shoesDetails', 'shoppingBag']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)


let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))
let persistor = persistStore(store)
export { store, persistor }

sagaMiddleware.run(rootSaga)