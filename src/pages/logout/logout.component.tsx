import React, { useEffect } from 'react';

import { useAuth } from 'modules/auth';
import { Loader } from 'components/loader';

function LogoutPage() {
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
  }, []);

  return <Loader />;
}

export default LogoutPage;
