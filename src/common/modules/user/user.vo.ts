class UserVO {
  id: string;
  name: string;

  constructor(data: UserVO) {
    Object.assign(this, data);
  }
}

export default UserVO;
