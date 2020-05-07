import { authSlice } from 'common/modules/auth';
import { oidClient } from '../auth.constants';
import AuthVO from '../auth.vo';

function signIn() {
  return async (dispatch) => {
    try {
      const hasAccessToken = window.location.href.indexOf('#access_token') >= 0;

      if (hasAccessToken) {
        const response = await oidClient.processSigninResponse();
        const attributes = response?.profile?.attributes || {};
        const auth = new AuthVO(attributes);
        dispatch(authSlice.actions.setAuth(auth));
      } else {
        await oidClient.signinRedirect();
      }
    } catch (e) {
      console.error(e);
    }
  };
}

export default signIn;
