import { combineReducers } from 'redux';
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { usersSlice, loggedUserSlice } from 'common/modules/user';
import { statusSlice } from 'common/modules/status';
import { IRootState } from './redux.interfaces';

const rootReducer = combineReducers({
  loggedUser: loggedUserSlice.reducer,
  status: statusSlice.reducer,
  users: usersSlice.reducer
});

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV !== 'production'
});
export type AppDispatch = typeof store.dispatch;
