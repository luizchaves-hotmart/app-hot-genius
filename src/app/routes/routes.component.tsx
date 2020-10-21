import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Auth from 'modules/auth/auth.component';
import { Structure } from 'components/structure';
import { Loader } from 'components/loader';
import PublicRoute from './public-route.component';
import PrivateRoute from './private-route.component';

import('../app-cosmos');
import('../i18n');

const Home = lazy(() => import('pages/home/home.component'));

function Routes() {
  return (
    <Structure>
      <hot-toast />
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <PublicRoute exact path="/public" component={() => <div>public</div>} />
          <PublicRoute exact path="/auth/login" component={Auth} />
          <PublicRoute exact path="/auth/logout" component={Auth} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/oi" component={() => <div>oi</div>} />
        </BrowserRouter>
      </Suspense>
    </Structure>
  );
}

export default Routes;
