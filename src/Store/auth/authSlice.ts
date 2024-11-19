import { createSlice } from "@reduxjs/toolkit";
import { State } from "../../Models/state";


const initialState = {
  user: null,
  token: null,
  profile: null,
  fcmtoken: null,

};

const authSlice: any = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action, ) => {
      const { user, token, fcmtoken } = action.payload;
      if (user) state.user = user;
      if (token) state.token = token;
      if(fcmtoken) state. fcmtoken = fcmtoken;
    },

    setAuthUser: (state, action) => {
      const { user } = action.payload;
      state.user = user;
    },

    setAuthProfile: (state, action) => {
      state.profile = action.payload.profile;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.token = null;
      state.profile = null;
      state.fcmtoken = null;
    },

  },
});

export const {
  setCredentials,
  setAuthUser,
  setAuthProfile,
  clearCredentials
} = authSlice.actions;

export default authSlice.reducer;

export const selectAuthUser = (state: State) =>
  state.persistedReducer.auth.user;

export const selectAuthToken = (state: State) =>
  state.persistedReducer.auth.token;
export const selectFcmToken = (state: State) =>
  state.persistedReducer.auth.fcmtoken;
export const selectProfile = (state: State): Profile | null => state.persistedReducer.auth.profile;






