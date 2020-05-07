import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'app/redux/redux.store';

import { PrivateErrorBoundary } from 'components/error';

interface IProps {
  component: any;
  exact: boolean;
  path: string;
}

function PrivateRoute(props: IProps) {
  const loggedUser = useSelector((state) => state.loggedUser);
  const Component = props.component;

  return (
    <Route
      exact={props.exact}
      path={props.path}
      render={() => {
        return loggedUser
          ? <PrivateErrorBoundary>
              <Component />
            </PrivateErrorBoundary>
          : <Redirect to="/" />;
      }} />
  );
}

export default PrivateRoute;
