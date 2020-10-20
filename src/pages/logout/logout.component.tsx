import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { signOut } from 'store/auth';
import { Loader } from 'components/loader';

function LogoutPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOut());
  }, []);

  return <Loader />;
}

export default LogoutPage;
