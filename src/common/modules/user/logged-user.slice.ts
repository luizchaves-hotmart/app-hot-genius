import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoggedUserType } from './user.types';

function setLoggedUser(state: LoggedUserType, action: PayloadAction<LoggedUserType>): LoggedUserType {
  return action.payload;
}

export default createSlice({
  name: 'loggedUser',
  initialState: null as LoggedUserType,
  reducers: { setLoggedUser }
});
