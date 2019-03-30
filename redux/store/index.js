/**
 * @providesModule WeFit.Redux.Store
 */

/* eslint-disable no-underscore-dangle */

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reduxThunk from 'redux-thunk';

import { serviceApi } from '../reducers';
import axiosMiddleware from './axiosMiddleware';

const persistConfig = {
    blacklist: [],
    key: 'root',
    storage,
}

export default function buildStore() {
    const reducers = combineReducers({
        serviceApi
    });
    const persistedReducer = persistReducer(persistConfig, reducers)

    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const store = createStore(
        persistedReducer,
        composeEnhancer(applyMiddleware(reduxThunk, axiosMiddleware))
    );
    persistStore(store)
    return store;
}