import { UserVO, loggedUserSlice } from 'common/modules/user';
import { oidClient } from '../auth.constants';

function signIn() {
  return async (dispatch) => {
    try {
      const hasAccessToken = window.location.href.indexOf('#access_token') >= 0;
      console.log(hasAccessToken);

      if (hasAccessToken) {
        const response = await oidClient.processSigninResponse();
        // const attributes = response?.profile?.attributes;
        // const loggedUser = new UserVO(attributes);
        // dispatch(loggedUserSlice.actions.setLoggedUser(loggedUser));
      } else {
        oidClient.signinRedirect();
      }
    } catch (e) {
      console.error(e);
    }
  };
}

export default signIn;
