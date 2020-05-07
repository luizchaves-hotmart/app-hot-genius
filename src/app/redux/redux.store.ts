import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { productSlice } from 'common/modules/product';
import { statusSlice } from 'common/modules/status';
import { authSlice } from 'common/modules/auth';
import { IRootState } from './redux.interfaces';

const rootReducer = {
  auth: authSlice.reducer,
  products: productSlice.reducer,
  status: statusSlice.reducer
};

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
export const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger],
  devTools: process.env.NODE_ENV !== 'production'
});

export type AppDispatch = typeof store.dispatch;
