import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { useSelector } from 'store/redux.store';
import { authService, authSlice } from 'modules/auth';
import Loader from 'components/loader/loader.component';

const AUTH_DEFAULT_ROUTE = '/';
const AUTH_REDIRECT_STORAGE = 'AUTH_REDIRECT_STORAGE';

function Auth() {
  const history = useHistory();
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

      const redirectRoute = sessionStorage.getItem(AUTH_REDIRECT_STORAGE);
      redirectRoute && history.push(redirectRoute);
      sessionStorage.removeItem(AUTH_REDIRECT_STORAGE);
    } catch (e) {
      const authRoutes = ['/auth/logout', '/auth/login'];
      const currRoute = !authRoutes.includes(location.pathname)
        ? `${location.pathname}${location.search}`
        : AUTH_DEFAULT_ROUTE;

      sessionStorage.setItem(AUTH_REDIRECT_STORAGE, currRoute);
      await authService.signoutCallback();
      await authService.signinRedirect();
    }
  }

  return !auth ? <Loader /> : null;
}

export default Auth;
