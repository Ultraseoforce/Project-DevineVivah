// import { createSlice } from "@reduxjs/toolkit";
// import { State } from "../../Models/state";

// // import { UserProfile } from "../../Models/user.model";
// // import { AuthState } from "../../Models/auth";

// const initialState = {
//   user: null,
//   token: null,
//   tnc_agreed: false,
//   profile: null,
//   userList: [],
//   onPlatformPage: false,
//   unreadMessageCount: 0,
// };

// const authSlice: any = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials: (state, action) => {
//       const { user, token, tnc_agreed, profile } = action.payload;
//       if (user) state.user = user;
//       if (profile) state.profile = profile;
//       if (token) state.token = token;
//       if (tnc_agreed) state.tnc_agreed = tnc_agreed;
//     },
//     logOut: (state, action) => {
//       state.user = null;
//       state.profile = null;
//       state.tnc_agreed = false;
//       state.token = null;
//       state.userList = [];
//     },
//     setAuthUser: (state, action) => {
//       const { user } = action.payload;
//       state.user = user;
//     },
//     setAuthProfile: (state, action) => {
//       const { profile } = action.payload;
//       state.profile = profile;
//     },
//     // setBrand: (state, action) => {
//     //   const { brands } = action.payload;
//     //   const profile: UserProfile = state.profile as UserProfile;
//     //   if (!profile.platformMetadata) profile.platformMetadata = {};
//     //   profile.platformMetadata!.brand_collaborations = brands;
//     //   state.profile = profile;
//     // },
//     // setProject: (state, action) => {
//     //   const { projects } = action.payload;
//     //   const profile: UserProfile = state.profile as UserProfile;
//     //   if (!profile.platformMetadata) profile.platformMetadata = {};
//     //   profile.platformMetadata!.projects = projects;
//     //   state.profile = profile;
//     // },
//     // setLinks: (state, action) => {
//     //   const { links } = action.payload;
//     //   const profile: UserProfile = state.profile as UserProfile;
//     //   if (!profile.platformMetadata) profile.platformMetadata = {};
//     //   profile.platformMetadata!.links = links;
//     //   state.profile = profile;
//     // },
//     // setMedias: (state, action) => {
//     //   const { medias } = action.payload;
//     //   const profile: UserProfile = state.profile as UserProfile;
//     //   if (!profile.platformMetadata) profile.platformMetadata = {};
//     //   profile.platformMetadata!.medias = medias;
//     //   state.profile = profile;
//     // },
//     // setPosts: (state, action) => {
//     //   const { posts } = action.payload;
//     //   const profile: UserProfile = state.profile as UserProfile;
//     //   if (!profile.platformMetadata) profile.platformMetadata = {};
//     //   profile.platformMetadata!.posts = posts;
//     //   state.profile = profile;
//     // },
//     // setHonorsAndAwards: (state, action) => {
//     //   const { honors } = action.payload;
//     //   const profile: UserProfile = state.profile as UserProfile;
//     //   if (!profile.platformMetadata) profile.platformMetadata = {};
//     //   profile.platformMetadata!.honors_and_awards = honors;
//     //   state.profile = profile;
//     // },
//     setUserList: (state, action) => {
//       const { userList } = action.payload;
//       state.userList = userList;
//     },
//     setOnPlatformPage: (state, action) => {
//       const { onPlatformPage } = action.payload;
//       state.onPlatformPage = onPlatformPage;
//     },
//     setUnreadMessageCount: (state, action) => {
//       state.unreadMessageCount = action.payload;
//     },
//   },
// });

// export const {
//   setCredentials,
//   setAuthUser,
//   setAuthProfile,
//   logOut,
//   setBrand,
//   setProject,
//   setLinks,
//   setMedias,
//   setPosts,
//   setHonorsAndAwards,
//   setUserList,
//   setOnPlatformPage,
//   setUnreadMessageCount,
// } = authSlice.actions;

// export default authSlice.reducer;

// export const selectAuthUser = (state: State) =>
//   state.persistedReducer.auth.user;

// export const selectAuthToken = (state: State) =>
//   state.persistedReducer.auth.token;

// export const selectAuthTermsAndCondition = (state: State) =>
//   state.persistedReducer.auth.tnc_agreed;

// export const selectAuthEmail = (state: State) =>
//   state.persistedReducer.auth.user?.email;

// export const selectProfile = (state: State) =>
//   state.persistedReducer.auth.profile;

// export const selectUserListSocket = (state: State) =>
//   state.persistedReducer.auth.userList;

// export const selectOnPlatformPage = (state: State) =>
//   state.persistedReducer.auth.onPlatformPage;

import { createSlice } from "@reduxjs/toolkit";
import { State } from "../../Models/state";

const initialState: AuthState = {
  user: null,
  token: null,
  tnc_agreed: false,
  profile: null,
  userList: [],
  onPlatformPage: false,
  unreadMessageCount: 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: { payload: Partial<AuthState> }) => {
      const { user, token, tnc_agreed, profile } = action.payload;
      if (user) state.user = user;
      if (profile) state.profile = profile;
      if (token) state.token = token;
      if (tnc_agreed) state.tnc_agreed = tnc_agreed;
    },
    logOut: (state) => {
      state.user = null;
      state.profile = null;
      state.tnc_agreed = false;
      state.token = null;
      state.userList = [];
    },
    setAuthUser: (state, action: { payload: { user: string } }) => {
      state.user = action.payload.user;
    },
    setAuthProfile: (state, action: { payload: { profile: Profile } }) => {
      state.profile = action.payload.profile;
    },
    setUserList: (state, action: { payload: { userList: string[] } }) => {
      state.userList = action.payload.userList;
    },
    setOnPlatformPage: (state, action: { payload: { onPlatformPage: boolean } }) => {
      state.onPlatformPage = action.payload.onPlatformPage;
    },
    setUnreadMessageCount: (state, action: { payload: number }) => {
      state.unreadMessageCount = action.payload;
    },
  },
});

export default authSlice.reducer;

export const selectAuthUser = (state: State) => state.persistedReducer.auth.user;
export const selectAuthToken = (state: State) => state.persistedReducer.auth.token;
export const selectAuthTermsAndCondition = (state: State) => state.persistedReducer.auth.tnc_agreed;
export const selectAuthEmail = (state: any) => state.persistedReducer.auth.user?.email;
export const selectProfile = (state: State) => state.persistedReducer.auth.profile;
export const selectUserListSocket = (state: State) => state.persistedReducer.auth.userList;
export const selectOnPlatformPage = (state: State) => state.persistedReducer.auth.onPlatformPage;
