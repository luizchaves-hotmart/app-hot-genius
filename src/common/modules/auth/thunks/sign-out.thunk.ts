import { loggedUserSlice } from 'common/modules/user';
import { oidClient } from '../auth.constants';

function signOut() {
  return async (dispatch) => {
    try {
      dispatch(loggedUserSlice.actions.setLoggedUser(null));
      await oidClient.signoutRedirect();
    } catch (e) {
      console.error(e);
    }
  };
}

export default signOut;
