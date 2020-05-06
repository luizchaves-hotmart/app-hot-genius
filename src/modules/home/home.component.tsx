import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'app/redux/redux.store';

import { UserVO , usersSlice } from 'common/modules/user';
import './home.component.scss';

function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = new UserVO({ id: '1', name: 'Test' });
    dispatch(usersSlice.actions.saveUsers([user]));
  }, []);

  console.warn(users, users.byId, users.allIds);
  return <div>home</div>
}

export default Home;
