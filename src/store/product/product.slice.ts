import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductState } from './product.interfaces';
import ProductVO from './product.vo';

const initialState: IProductState = {
  allIds: [],
  byId: {}
};

function saveProducts(state: IProductState, action: PayloadAction<ProductVO[]>): IProductState {
  const byId = { ...state.byId };
  action.payload.forEach((product) => product.id && (byId[product.id] = product));

  return { ...state, allIds: Object.keys(byId), byId };
}

function deleteProducts(state: IProductState, action: PayloadAction<ProductVO[]>): IProductState {
  const byId = { ...state.byId };
  action.payload.forEach((product) => product.id && delete byId[product.id]);

  return { ...state, allIds: Object.keys(byId), byId };
}

export default createSlice({
  name: 'products',
  initialState,
  reducers: { saveProducts, deleteProducts }
});
