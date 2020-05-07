import { authSlice } from 'common/modules/auth';
import { oidClient } from '../auth.constants';

function signOut() {
  return async (dispatch) => {
    try {
      dispatch(authSlice.actions.setAuth(null));
      await oidClient.signoutRedirect();
    } catch (e) {
      console.error(e);
    }
  };
}

export default signOut;
