import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import createSagaMiddleWare from "redux-saga";

import allReducers from "../reducers";

import { watchCounter } from "../sagas/index";

//Initial State
const initialState = { count: 0, lastAction: undefined };

const sagaMiddleWare = createSagaMiddleWare();

//middleWare with thunk
const middleWare = [thunk, sagaMiddleWare];

//create store
const store = createStore(
  allReducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

sagaMiddleWare.run(watchCounter);
//export the store
export default store;
