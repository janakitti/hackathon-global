import { TUserState, UserActions, TUserActions } from "../types/UserTypes";

export const userReducer = (state: TUserState, action: TUserActions) => {
  switch (action.type) {
    case UserActions.LOGIN_USER:
      return { ...action.payload };
    case UserActions.LOGOUT_USER:
      return {
        username: "",
        email: "",
      };
    default:
      return state;
  }
};
