import { useDispatch } from 'react-redux';

import { IUseAuth } from './auth.interfaces';
import authService from './auth.service';
import authSlice from './auth.slice';

function useAuth(): IUseAuth {
  const dispatch = useDispatch();

  async function signIn() {
    try {
      const user = await authService.signinCallback();
      dispatch(authSlice.actions.setAuth(user));
      console.warn('User info:', user);
    } catch (e) {
      authService.signinRedirect();
    }
  }

  function signOut() {
    authService.signoutRedirect();
    authService.removeUser();
  }

  return { signIn, signOut };
}

export default useAuth;
