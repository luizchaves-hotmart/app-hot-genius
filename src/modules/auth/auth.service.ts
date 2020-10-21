import AuthService from '@hotmart/cas-js';

const authService = new AuthService({
  env: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  client_id: process.env.AUTH_CLIENT_ID,
  redirect_uri: `${process.env.APP_URL}/home`
});

export default authService;
