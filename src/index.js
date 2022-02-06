import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import history from "./utils/history";
import { ConnectedRouter } from "connected-react-router";
import App from "./App";

/** Load store with initial store and browser history */
const preloadedState = {};
const store = configureStore(preloadedState, history);

// import { AppContainer } from 'react-hot-loader' load it at first

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App history={history}/>
    </ConnectedRouter>
  </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
