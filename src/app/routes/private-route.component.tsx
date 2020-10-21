import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import { PrivateErrorBoundary } from 'components/error';
import { useSelector } from 'store/redux.store';
import { Auth } from 'modules/auth';

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
        return (
          <Fragment>
            <Auth />
            {auth ? (
              <PrivateErrorBoundary>
                <Component />
              </PrivateErrorBoundary>
            ) : null}
          </Fragment>
        );
      }}
    />
  );
}

export default PrivateRoute;
