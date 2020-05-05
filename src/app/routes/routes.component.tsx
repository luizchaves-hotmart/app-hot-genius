import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';

import { Loader } from 'components/loader';
import { Structure } from 'components/structure';
import PublicRoute from './public-route.component';

const HomeLoadable = lazy(() => import('modules/home/home.component'));

function Routes() {
  return (
    <Structure>
      <hot-toast />
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <PublicRoute exact path="/" component={() => <Redirect to="/home" />} />
          <PublicRoute exact path="/home" component={HomeLoadable} />
        </BrowserRouter>
      </Suspense>
    </Structure>
  );
}

export default Routes;
