import AuthService from '@hotmart/cas-js';
import { IUseAuth } from './auth.interfaces';

const auth = new AuthService({
  env: 'development',
  authority: 'https://sso.buildstaging.com/oidc',
  response_type: 'id_token token',
  client_id: process.env.AUTH_CLIENT_ID,
  redirect_uri: 'http://dev.buildstaging.com:8080',
  scope: 'openid authorities user profile'
});

function useAuth(): IUseAuth {
  async function signIn() {
    auth.signinCallback().then((user) => {
      console.log('User info:', user);
    }).catch(() => auth.signinRedirect());
  }

  function signOut() {
    auth.signoutRedirect();
  }

  return { signIn, signOut };
}

export default useAuth;
