import { UserManager, WebStorageStateStore, InMemoryWebStorage } from 'oidc-client';

export const oidClient = new UserManager({
  'authority': process.env.AUTH_DOMAIN,
  'client_id': process.env.AUTH_CLIENT_ID,
  'response_type': process.env.AUTH_RESPONSE_TYPE,
  'redirect_uri': process.env.AUTH_REDIRECT_URI,
  'scope': process.env.AUTH_SCOPE,
  userStore: new WebStorageStateStore({ store: new InMemoryWebStorage() }),
});
