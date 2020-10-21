import React, { useState, useEffect } from 'react';

import { useSelector } from 'store/redux.store';
import { Loader } from 'components/loader';
import { useAuth } from 'modules/auth';
import { Routes } from './routes';

function AppMain() {
  const { signIn } = useAuth();
  const [isReady, setIsReady] = useState<boolean>(false);
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    auth ? setIsReady(true) : signIn();
  }, [auth]);

  return !isReady ? <Loader /> : <Routes />;
}

export default AppMain;
