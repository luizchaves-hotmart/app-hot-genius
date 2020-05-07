import { AUTHORITIES } from 'common/constants';

type UserVOConstructor =
  Pick<UserVO, 'id' | 'name' | 'locale'>
  & Partial<UserVO>;

export default class UserVO {
  readonly id: string;

  name: string;
  locale: string;
  authorities: AUTHORITIES[];

  constructor(data: UserVOConstructor) {
    this.authorities = [];
    Object.assign(this, data);
  }
}
