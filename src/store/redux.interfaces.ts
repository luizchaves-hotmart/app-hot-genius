import { IProductState } from './product/product.interfaces';
import { IStatusState } from './status/status.interfaces';
import { TAuth } from './auth/auth.interfaces';

export interface IRootState {
  auth: TAuth;
  products: IProductState;
  status: IStatusState;
}
