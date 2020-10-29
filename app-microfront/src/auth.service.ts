import AuthService from '@hotmart/cas-js';

const authService = new AuthService({
  env: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  client_id: process.env.AUTH_CLIENT_ID,
  // accessTokenExpiringNotificationTime: 290
});

const AUTH_DEFAULT_ROUTE = '/';
const AUTH_REDIRECT_STORAGE = 'AUTH_REDIRECT_STORAGE';

class AuthMF extends HTMLElement {
  logout() {
    authService.signoutRedirect();
  }

  async connectedCallback() {
    const authRenewRoute = new URL(authService.userManager.settings.silent_redirect_uri).pathname;
    const authLoginRoute = new URL(authService.userManager.settings.redirect_uri).pathname;
    const authLogoutRoute = new URL(authService.userManager.settings.post_logout_redirect_uri).pathname;
    const authRoutes = [authRenewRoute, authLoginRoute, authLogoutRoute];

    try {
      let user = await authService.getUser();
      if (!user || location.pathname === authRenewRoute) user = await authService.signinCallback();
      localStorage.setItem('auth:token', user?.id_token);
      window.dispatchEvent(new CustomEvent('auth:user', { detail: user }));

      const redirectRoute = sessionStorage.getItem(AUTH_REDIRECT_STORAGE);
      console.log('redirectRoute', redirectRoute);
      redirectRoute && window.dispatchEvent(new CustomEvent('auth:redirect', { detail: redirectRoute }));
      sessionStorage.removeItem(AUTH_REDIRECT_STORAGE);
      window.dispatchEvent(new Event('addUserLoaded'));
    } catch (e) {
      const currRoute = !authRoutes.includes(location.pathname)
        ? `${location.pathname}${location.search}`
        : AUTH_DEFAULT_ROUTE;

      localStorage.removeItem('auth:token');
      sessionStorage.setItem(AUTH_REDIRECT_STORAGE, currRoute);
      await authService.signoutCallback();
      await authService.signinRedirect();
    }
  }
}

customElements.define('hot-auth', AuthMF);

export default authService;
