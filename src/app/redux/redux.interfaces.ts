import { IProductState } from 'common/modules/product';
import { AuthType } from 'common/modules/auth';
import { IStatusState } from 'common/modules/status';

export interface IRootState {
  auth: AuthType;
  products: IProductState;
  status: IStatusState;
}
