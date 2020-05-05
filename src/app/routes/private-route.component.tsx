import React from 'react';
import { Route } from 'react-router-dom';

import { PrivateErrorBoundary } from 'components/error';

interface IProps {
  component: any;
  exact: boolean;
  path: string;
}

function PrivateRoute(props: IProps) {
  const Component = props.component;

  /* Validate session user */

  return (
    <Route
      exact={props.exact}
      path={props.path}
      render={() => (
        <PrivateErrorBoundary>
          <Component />
        </PrivateErrorBoundary>
      )} />
  );
}

export default PrivateRoute;
