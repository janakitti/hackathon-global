export type TUserState = {
  username: string;
  email: string;
};

export enum UserActions {
  LOGIN_USER = "LOGIN_USER",
  LOGOUT_USER = "LOGOUT_USER",
}

export type TUserActions = {
  type: UserActions;
  payload: any;
};
