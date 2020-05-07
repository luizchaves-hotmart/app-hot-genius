import { IUsersState, LoggedUserType } from 'common/modules/user';
import { IStatusState } from 'common/modules/status';

export interface IRootState {
  loggedUser: LoggedUserType
  status: IStatusState;
  users: IUsersState;
}
