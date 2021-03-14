import { TUserState, UserActions } from "../types/UserTypes";

export const loginUser = (user: TUserState) => ({
  type: UserActions.LOGIN_USER,
  payload: user,
});
