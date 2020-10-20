import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Loader } from 'components/loader';
import { Structure } from 'components/structure';
import PublicRoute from './public-route.component';
import PrivateRoute from './private-route.component';

const Logout = lazy(() => import('pages/logout/logout.component'));
const Home = lazy(() => import('pages/home/home.component'));

function Routes() {
  return (
    <Structure>
      <hot-toast />
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <PublicRoute exact path="/logout" component={Logout} />
          <PrivateRoute exact path="/home" component={Home} />
        </BrowserRouter>
      </Suspense>
    </Structure>
  );
}

export default Routes;
