import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AuthService from '@hotmart/cas-js';

import { Loader } from 'components/loader';
import { signIn } from 'store/auth';
import { Routes } from './routes';

function AppMain() {
  const dispatch = useDispatch();
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(function readStorage() {
    const auth = new AuthService(process.env.AUTH_CLIENT_ID as string)
    auth.signinCallback().then((user) => {
      console.log('User info:', user);
      setIsReady(true);
    }).catch(() => dispatch(signIn()));
  }, []);

  return !isReady ? <Loader /> : <Routes />;
}

export default AppMain;
