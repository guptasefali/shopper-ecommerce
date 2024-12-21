import { Reducer } from './Reducer'
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

//npm install redux-persist

import logger from 'redux-logger'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, Reducer, applyMiddleware(logger))
const store = createStore(persistedReducer)
const persistor = persistStore(store)
export { store, persistor };
