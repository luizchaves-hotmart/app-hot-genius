import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUsersState } from './user.interfaces';
import UserVO from './user.vo';

const initialState: IUsersState = {
  allIds: [],
  byId: {}
};

function saveUsers(state: IUsersState, action: PayloadAction<UserVO[]>): IUsersState {
  const byId = { ...state.byId };
  action.payload.forEach((user) => user.id && (byId[user.id] = user));

  return { ...state, allIds: Object.keys(byId), byId };
}

function deleteUsers(state: IUsersState, action: PayloadAction<UserVO[]>): IUsersState {
  const byId = { ...state.byId };
  action.payload.forEach((user) => user.id && delete byId[user.id]);

  return { ...state, allIds: Object.keys(byId), byId };
}

export default createSlice({
  name: 'users',
  initialState,
  reducers: { saveUsers, deleteUsers }
});
