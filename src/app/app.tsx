import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { UserManager } from 'oidc-client'
const settings = {
  'authority': process.env.AUTH_DOMAIN,
  'client_id': process.env.AUTH_CLIENT_ID,
  'response_type': process.env.AUTH_RESPONSE_TYPE,
  'redirect_uri': process.env.AUTH_REDIRECT_URI + (window.location.pathname || ''),
  'scope': process.env.AUTH_SCOPE
}

/* Cosmos global styles */
import '@cosmos/styles/reset.css';
import '@cosmos/styles/base.css';
import '@cosmos/styles/theme.css';

/* Cosmos global components */
import '@cosmos/alert/variations/warning.css';
import '@cosmos/alert/variations/success.css';
import '@cosmos/alert/variations/danger.css';
import '@cosmos/alert';
import '@cosmos/toast';

/* Cosmos global utilities */
import '@cosmos/styles/utilities/sizing.css';
import '@cosmos/styles/utilities/text/text.css';
import '@cosmos/styles/utilities/border/border.css';

import { Routes } from './routes';
import { store } from './redux/redux.store';

import './i18n';
import './app.scss';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
