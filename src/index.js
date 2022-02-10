import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import history from "./utils/history";
import { ConnectedRouter } from "connected-react-router";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import globalTheme from "./themes/global-themes";

/** Load redux store with initial empty store object & browser history */
const preloadedState = {};
const store = configureStore(preloadedState, history);

/**  */

// import { AppContainer } from 'react-hot-loader' load it at first

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <ThemeProvider theme={globalTheme(getThemeMode)}> */}
        <ConnectedRouter history={history}>
          
          <App history={history}/>
        </ConnectedRouter>
      {/* </ThemeProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
