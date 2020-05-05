import UserVO from './user.vo';

export interface IUsersState {
  allIds: string[];
  byId: { [id: string]: UserVO };
}
