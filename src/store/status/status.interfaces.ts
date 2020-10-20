export interface IStatusState {
  [key: string]: {
    status: string;
    detail?: string;
  };
}

export interface IStatusPayload {
  key: string;
  status: string;
  detail?: string;
}
