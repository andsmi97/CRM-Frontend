import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import { appReducer, dealsReducer } from "./reducers";
import * as serviceWorker from "./serviceWorker";

const logger = createLogger();
const rootReducer = combineReducers({
  appReducer,
  dealsReducer
});
let store = "";
// if (process.env.NODE_ENV === "production") {
//   store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// }
store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));


ReactDOM.render(  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
