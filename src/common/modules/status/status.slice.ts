import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IStatusState, IStatusPayload } from './status.interfaces';

const initialState: IStatusState = {};

function setStatus(state: IStatusState, action: PayloadAction<IStatusPayload>): IStatusState {
  return {
    ...state,
    [action.payload.key]: {
      status: action.payload.status,
      detail: action.payload.detail
    }
  };
}

export default createSlice({
  name: 'status',
  initialState,
  reducers: { setStatus }
});
