import { UtilState } from "./util";

export type State = {
  persistedReducer: PresistedState;
  util: UtilState;
};


export type PresistedState = {
  [x: string]: any;
  auth: AuthState;
//   buyerauth: BuyerAuthState;
};
