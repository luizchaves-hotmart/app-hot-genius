export interface IAuth {
  readonly id: string;
  readonly authenticationDate: string;
  readonly authenticationMethod: string;
  readonly authorities: string[];
  readonly credentialType: string;
  readonly locale: string;
  readonly login: string;
  readonly loginAttempts: string;
}

export interface IUseAuth {
  signIn(): void;
  signOut(): void;
}

export type TAuth = IAuth | null;
