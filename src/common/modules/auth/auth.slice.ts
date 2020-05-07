import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthType } from './auth.types';

function setAuth(state: AuthType, action: PayloadAction<AuthType>): AuthType {
  return action.payload;
}

export default createSlice({
  name: 'auth',
  initialState: null as AuthType,
  reducers: { setAuth }
});
