export default class AuthVO {
  readonly id: string;
  readonly authenticationDate: string;
  readonly authenticationMethod: string;
  readonly authorities: string[];
  readonly credentialType: string;
  readonly locale: string;
  readonly login: string;
  readonly loginAttempts: string;

  constructor(data: AuthVO) {
    Object.assign(this, data);
  }
}
