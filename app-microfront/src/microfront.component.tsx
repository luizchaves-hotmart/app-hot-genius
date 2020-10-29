import React, { useEffect, useState, Fragment } from 'react';
import singleSpaReact from 'single-spa-react';
import ReactDOM from 'react-dom';

import '@cosmos/button/button.css';
import '@cosmos/button/variations/primary.css';
import authService from './auth.service';

function Microfront() {
  const [user, setUser] = useState<{ id_token: string }>();

  useEffect(getUser, []);
  useEffect(() => {
    authService.userManager.events.addUserLoaded(getUser);
    return () => {
      authService.userManager.events.removeUserLoaded(getUser);
    };
  }, []);

  function getUser() {
    authService.getUser().then(setUser);
  }

  return (
    <Fragment>
      <button className="hot-button hot-button--primary">
        Microfront with SingleSPA <br/>
      </button>
      {`Your token ${user?.id_token}`}
    </Fragment>
  );
}

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Microfront
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
