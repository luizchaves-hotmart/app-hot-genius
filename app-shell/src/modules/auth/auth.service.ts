import AuthService, { Bootstrap } from '@hotmart/cas-js';
import { TAuth } from 'modules/auth/auth.interfaces';

const authService = new AuthService({
  env: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  client_id: process.env.AUTH_CLIENT_ID,
  // accessTokenExpiringNotificationTime: 290
});

const bootstrap = new Bootstrap<TAuth>(authService);

export { bootstrap };
export default authService;
