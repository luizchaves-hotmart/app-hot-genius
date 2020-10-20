import React, { useState, useEffect } from 'react';

import { Loader } from 'components/loader';
import { useAuth } from 'modules/auth';
import { Routes } from './routes';

function AppMain() {
  const { signIn } = useAuth();
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(signIn, []);

  return !isReady ? <Loader /> : <Routes />;
}

export default AppMain;
