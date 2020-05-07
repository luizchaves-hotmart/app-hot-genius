import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';

import { useSelector } from 'app/redux/redux.store';
import { Loader } from 'components/loader';
import { signIn, signOut } from 'common/modules/auth';

function Login(props: RouteComponentProps) {
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loggedUser) dispatch(signIn());
    else props.history.push('/home');
  }, [loggedUser]);

  return <Loader />;
}

export default withRouter(Login);
