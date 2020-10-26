import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import '@cosmos/styles/reset.css';
import '@cosmos/styles/base.css';
import '@cosmos/styles/theme.css';

import Button from '../components/button/button.component';

ReactDOM.render((
  <Suspense fallback="loading...">
    <Button />
  </Suspense>
), document.getElementById('root'));
