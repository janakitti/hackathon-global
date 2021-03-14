import { createContext, useReducer } from "react";
import { TUserState } from "./types/UserTypes";
import { userReducer } from "./reducers/UserReducer";

type TStore = {
  user: TUserState;
};

const initialState: TStore = {
  user: {
    username: "Guest Hacker",
    email: "",
    type: "public",
    profilePic: "./default_pfp.svg",
  },
};

const AppContext = createContext<{
  state: TStore;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

const mainReducer = ({ user }: TStore, action: any): TStore => ({
  user: userReducer(user, action),
});

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
