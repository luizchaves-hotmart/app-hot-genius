import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import '@cosmos/styles/reset.css';
import '@cosmos/styles/base.css';
import '@cosmos/styles/theme.css';

ReactDOM.render((
  <Suspense fallback="loading...">
    <div>oi</div>
  </Suspense>
), document.getElementById('root'));
