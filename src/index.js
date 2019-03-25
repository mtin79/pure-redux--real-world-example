import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./reducer";

import App from "./App";

import "./styles.css";

const reduxStore = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true })
);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  rootElement
);
