export interface IAuth {
  readonly id_token: string;
  readonly access_token: string;
  readonly token_type: string;
  readonly profile: {
    name: string;
    locale: string;
  };
}

export type TAuth = IAuth | null;
