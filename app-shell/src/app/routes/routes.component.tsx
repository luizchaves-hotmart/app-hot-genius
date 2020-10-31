import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { bootstrap, authSlice } from 'modules/auth';
import { Structure } from 'components/structure';
import { Loader } from 'components/loader';
import PrivateRoute from './private-route.component';
import PublicRoute from './public-route.component';

import('../app-cosmos');
import('../i18n');

const Home = lazy(() => import('pages/home/home.component'));
const Module = lazy(() => import('pages/module/module.component'));

function Routes() {
  const dispatch = useDispatch();

  useEffect(() => {
    bootstrap.subscribe({
      next: (auth) => dispatch(authSlice.actions.setAuth(auth))
    });
  }, []);

  return (
    <BrowserRouter>
      <Structure>
        <hot-toast />
        <Switch>
          <Suspense fallback={<Loader />}>
            <PublicRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/module" component={Module} />
            <PrivateRoute exact path="/auth/logout" component={Loader} />
            <PrivateRoute exact path="/auth/login" component={Loader} />
            <PrivateRoute exact path="/auth/renew" component={Loader} />
          </Suspense>
        </Switch>
      </Structure>
    </BrowserRouter>
  );
}

export default Routes;
