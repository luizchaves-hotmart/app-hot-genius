import React, { lazy, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

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
          <PublicRoute exact path="/oi" component={() => <div>oi</div>} />
          <PrivateRoute exact path="/" component={Home} />
        </BrowserRouter>
      </Suspense>
    </Structure>
  );
}

export default Routes;
