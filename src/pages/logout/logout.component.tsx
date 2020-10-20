import React, { useEffect } from 'react';

import { useAuth } from 'modules/auth';
import { Loader } from 'components/loader';

function LogoutPage() {
  const auth = useAuth();

  useEffect(auth.signOut, []);

  return <Loader />;
}

export default LogoutPage;
