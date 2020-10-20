import AuthService from '@hotmart/cas-js';

function signOut() {
  return async () => {
    try {
      const auth = new AuthService(process.env.AUTH_CLIENT_ID as string)
      auth.signoutRedirect();
    } catch (e) {
      console.error(e);
    }
  };
}

export default signOut;
