import { createStore, compose, applyMiddleware} from 'redux';
import { InitialState } from './uses/state';
import { combineReducers } from 'redux';
import { reducer } from './uses/reducer'

export const reducers = combineReducers({
  data: reducer
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export interface RootStore {
  data: InitialState
}

export const store = createStore(reducers, composeEnhancers(applyMiddleware()));