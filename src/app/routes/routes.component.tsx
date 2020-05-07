import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Loader } from 'components/loader';
import { Structure } from 'components/structure';
import PublicRoute from './public-route.component';
import PrivateRoute from './private-route.component';

const LoginLoadable = lazy(() => import('modules/login/login.component'));
const HomeLoadable = lazy(() => import('modules/home/home.component'));

function Routes() {
  return (
    <Structure>
      <hot-toast />
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <PublicRoute exact path="/" component={LoginLoadable} />
          <PublicRoute exact path="/login" component={LoginLoadable} />
          <PrivateRoute exact path="/home" component={HomeLoadable} />
        </BrowserRouter>
      </Suspense>
    </Structure>
  );
}

export default Routes;
