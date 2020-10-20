import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'store/redux.store';

import { PrivateErrorBoundary } from 'components/error';

interface IProps {
  component: any;
  exact: boolean;
  path: string;
}

function PrivateRoute(props: IProps) {
  const auth = useSelector((state) => state.auth);
  const Component = props.component;

  return (
    <Route
      exact={props.exact}
      path={props.path}
      render={() => {
        return auth
          ? <PrivateErrorBoundary>
              <Component />
            </PrivateErrorBoundary>
          : <Redirect to="/" />;
      }} />
  );
}

export default PrivateRoute;
