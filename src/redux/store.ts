import { Action, configureStore } from '@reduxjs/toolkit';
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './modules';
const isDevelopment = process.env.NODE_ENV !== 'production' && typeof window === 'object';
const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(reducers);
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);
export default store;
