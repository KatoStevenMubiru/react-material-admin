import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { createStore, applyMiddleware, compose } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'connected-react-router';
import { ThemeProvider as ThemeProviderV5 } from '@mui/material/styles';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { LayoutProvider } from './context/LayoutContext';
import { UserProvider } from './context/UserContext';
import { ManagementProvider } from './context/ManagementContext';
import { LanguageProvider } from './context/LanguageContext';
import createRootReducer from './reducers';
import {
  ThemeProvider as ThemeChangeProvider,
  ThemeStateContext,
} from './context/ThemeContext';
import CssBaseline from '@mui/material/CssBaseline';
import config from '../src/config';

import { createHashHistory, createMemoryHistory } from 'history';

const history =
  typeof window !== 'undefined'
    ? createHashHistory()
    : createMemoryHistory({
        initialEntries: [],
      });

export function getHistory() {
  return history;
}

axios.defaults.baseURL = config.baseURLApi;
axios.defaults.headers.common['Content-Type'] = 'application/json';
const token = localStorage.getItem('token');
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

// Set default theme to light mode if not already set
if (!localStorage.getItem('theme')) {
  localStorage.setItem('theme', 'default');
}

export const store = createStore(
  createRootReducer(history),
  compose(applyMiddleware(routerMiddleware(history), ReduxThunk)),
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <LayoutProvider>
      <UserProvider>
        <LanguageProvider>
          <StyledEngineProvider injectFirst>
            <ThemeChangeProvider>
              <ThemeStateContext.Consumer>
                {(theme) => (
                  <ThemeProviderV5 theme={theme}>
                    <ManagementProvider>
                      <CssBaseline />
                      <App />
                    </ManagementProvider>
                  </ThemeProviderV5>
                )}
              </ThemeStateContext.Consumer>
            </ThemeChangeProvider>
          </StyledEngineProvider>
        </LanguageProvider>
      </UserProvider>
    </LayoutProvider>
  </Provider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
