import AuthService from '@hotmart/cas-js'

function signIn() {
  return async () => {
    try {
      const auth = new AuthService(`${process.env.AUTH_CLIENT_ID}`);
      auth.signinRedirect();
    } catch (e) {
      console.error(e);
    }
  };
}

export default signIn;
