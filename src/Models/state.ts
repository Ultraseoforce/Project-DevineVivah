// import { AuthState,  } from "./auth";
import { AuthState } from "./auth";
import { UtilState } from "./util";

export type State = {
  persistedReducer: PresistedState;
  util: UtilState;
};

// export type PresistedState = {
//     [x: string]: any;
//     auth: AuthState;
// }
export type PresistedState = {
  [x: string]: any;
  auth: AuthState;
//   buyerauth: BuyerAuthState;
};
