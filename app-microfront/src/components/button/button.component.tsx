import React, { useState, useEffect, PropsWithChildren, Fragment } from 'react';
import AuthService from '@hotmart/cas-js';
import { useTranslation } from 'react-i18next';

import 'app/i18n';
import '@cosmos/button/button.css';
import '@cosmos/button/variations/primary.css';

const authService = new AuthService({
  env: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  client_id: process.env.AUTH_CLIENT_ID
});

interface IProps {
  onClick?(): void;
}

function Button(props: PropsWithChildren<IProps>) {
  const { t } = useTranslation();
  const [user, setUser] = useState<{ id_token: string, profile: { name: string } }>();

  useEffect(() => {
    authService.getUser().then(setUser);
    window.addEventListener('addUserLoaded', refreshUser);
    return () => { window.removeEventListener('addUserLoaded', refreshUser); };
  }, []);

  async function refreshUser() {
    try {
      const user = await authService.getUser();
      console.warn('REFRESH USER!', user);
      setUser(user);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Fragment>
      <button className="hot-button hot-button--primary" onClick={props.onClick}>
        {t('button', { name: user?.profile.name })}
      </button>
      <br />
      That is your token: {user?.id_token}
    </Fragment>
  );
}

export default Button;
