import { IUsersState } from 'common/modules/user';
import { IStatusState } from 'common/modules/status';

export interface IRootState {
  status: IStatusState;
  users: IUsersState;
}
