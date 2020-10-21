import React, { useEffect } from 'react';

import { useSelector } from 'store/redux.store';
import { authService, authSlice } from 'modules/auth';
import { useDispatch } from 'react-redux';

function Auth() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    !auth && authProcess();
  }, []);

  async function authProcess() {
    try {
      let user = await authService.getUser();
      if (!user) user = await authService.signinCallback();
      dispatch(authSlice.actions.setAuth(user));
    } catch (e) {
      await authService.signoutCallback();
      await authService.signinRedirect();
    }
  }

  return null;
}

export default Auth;
