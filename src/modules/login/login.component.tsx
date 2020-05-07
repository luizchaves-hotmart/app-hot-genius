import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';

import { useSelector } from 'app/redux/redux.store';
import { Loader } from 'components/loader';
import { signIn } from 'common/modules/auth';

function Login(props: RouteComponentProps) {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth) dispatch(signIn());
    else props.history.push('/home');
  }, [auth]);

  return <Loader />;
}

export default withRouter(Login);
