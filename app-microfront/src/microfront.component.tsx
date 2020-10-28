import React from 'react';
import singleSpaReact from 'single-spa-react';
import ReactDOM from 'react-dom';

import '@cosmos/button/button.css';
import '@cosmos/button/variations/primary.css';

function Microfront() {
  return (
    <button className="hot-button hot-button--primary">Microfront with SingleSPA</button>
  );
}

const headerLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Microfront
});

export const bootstrap = headerLifecycles.bootstrap;
export const mount = headerLifecycles.mount;
export const unmount = headerLifecycles.unmount;
