import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

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
import '@cosmos/styles/utilities/flex/flex.css';
import '@cosmos/styles/utilities/border/border.css';
import '@cosmos/styles/utilities/spacing/spacing.css';
import '@cosmos/styles/utilities/display/display.css';

import { Routes } from './routes';
import { store } from './redux/redux.store';

import './i18n';
import './styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
