import { createEntityAdapter } from "@reduxjs/toolkit";
import { store } from "..";

import { apiSlice } from "../api";
import { setAuthProfile, setAuthUser, setPosts } from "./authSlice";

const AuthAdapter = createEntityAdapter({});

const initialState = AuthAdapter.getInitialState();

const URLS = {
  login: "login",
  singUp: "signup",
  verifyotp: "verify-otp",
  account: "account",
  profile: "account/profile",
  forgotPassword: "account/forgot-password",
  changePassword: "account/change-password",
  resetPassword: "account/reset-password",
  accountComplete: "account/complete",
  posts: "post",
  feed: "post/feed",
  link: "link",
  youMay: "people-you-may",
  alsoViewed: "people-also-viewed",
  activity: "profile/activities",
  followers: "profile/followers",
  connection: "profile/connection",
  following: "profile/followings",
  search: "location/search?location=",
  comment: "post/comment/",
  deleteProfile: "account/delete-profile",
};

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getAccount: builder.query({
      query: () => `${URLS.account}`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData.data;
        store.dispatch(setAuthUser({ user: data }));
        return data;
      },
      providesTags: (result: any, error: any, arg: any) => [
        { type: "Auth", id: "DATA" },
      ],
    }),
    getProfile: builder.mutation({
      query: () => `${URLS.profile}`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData.data;
        store.dispatch(setAuthProfile({ profile: data }));
        return data;
      },
    }),
    getProfileById: builder.query({
      query: (id: string) => `${URLS.posts}/${id}`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData.data;
        return data;
      },
    }),
    getProfileByUsername: builder.mutation({
      query: (username: string) => `${URLS.profile}/${username}`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData.data;
        return data;
      },
    }),
    getPosts: builder.query({
      query: () => `${URLS.posts}`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData.data;
        store.dispatch(setPosts({ profile: data }));
        return data;
      },
    }),
    getPostById: builder.mutation({
      query: (id: string) => `${URLS.posts}/${id}`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData.data;
        return data;
      },
    }),
    getSearch: builder.mutation({
      query: (text: string) => `${URLS.search}${text}`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData.data;
        return data;
      },
    }),
    getFeed: builder.mutation({
      query: (page: number) => `${URLS.feed}?page=${page}&limit=${10}`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData.data;
        return data;
      },
    }),
    getFollower: builder.mutation({
      query: (page: number) => `${URLS.followers}?page=${page}&limit=${10}`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData.data;
        return data;
      },
    }),
    getConnection: builder.mutation({
      query: (page: number) => `${URLS.connection}?page=${page}&limit=${10}`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData.data;
        return data;
      },
    }),
    getFollowing: builder.mutation({
      query: (page: number) => `${URLS.following}?page=${page}&limit=${10}`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData.data;
        return data;
      },
    }),
    getActivity: builder.mutation({
      query: (username: string) => {
        return `${URLS.activity}/${username}`;
      },
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData.data;
        return data;
      },
    }),
    getLink: builder.query({
      query: () => `${URLS.link}`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData.data;
        return data;
      },
    }),
    getPeopleYouKnow: builder.mutation({
      query: (account_id: string) => `${URLS.youMay}/${account_id}`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData;
        return data;
      },
    }),
    getPeopleAlsoView: builder.mutation({
      query: (account_id: string) => `${URLS.alsoViewed}/${account_id}`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData;
        return data;
      },
    }),
    updateUserProfile: builder.mutation({
      query: (data: any) => ({
        url: URLS.profile,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: [
        { type: "Auth", id: "PROFILE" },
        { type: "Auth", id: "DATA" },
      ],
    }),
    repostFeed: builder.mutation({
      query: (data: any) => ({
        url: URLS.posts,
        method: "POST",
        body: data,
      }),
      invalidatesTags: [
        { type: "Auth", id: "PROFILE" },
        { type: "Auth", id: "DATA" },
      ],
    }),
    login: builder.mutation({
      query: (credentials:  any)=> (
        console.log("credentials", credentials),
        {
        url: URLS.login,
        method: "POST",
        body: { ...credentials },
        headers: {
          'Content-Type': 'application/json',
      },
      }),
    }),
    forgotPassword: builder.mutation({
      query: (email: string) => ({
        url: URLS.forgotPassword,
        method: "POST",
        body: { email },
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ email, token, password }: any) => ({
        url: URLS.resetPassword,
        method: "POST",
        body: { email, token, password },
      }),
    }),
    changePassword: builder.mutation({
      query: ({ newPassword, password }: any) => ({
        url: URLS.changePassword,
        method: "POST",
        body: { newPassword, password },
      }),
    }),
    singup: builder.mutation({
      query: (data: any) => ({
        url: URLS.singUp,
        method: "POST",
        body: data,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (data: any) => ({
        url: URLS.verifyotp,
        method: "POST",
        body: data,
      }),
    }),
    

   
    deleteProfile: builder.mutation({
      query: () => ({
        url: URLS.deleteProfile,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAccountQuery,
  useGetProfileMutation,
  useGetPostsQuery,
  useGetPostByIdMutation,
  useUpdateUserProfileMutation,
  useGetProfileByIdQuery,
  useLoginMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useChangePasswordMutation,
  useCompleteAccountMutation,
  useGetFeedMutation,
  useGetLinkQuery,
  useGetPeopleYouKnowMutation,
  useGetPeopleAlsoViewMutation,
  useGetActivityMutation,
  useGetProfileByUsernameMutation,
  useGetFollowerMutation,
  useGetConnectionMutation,
  useGetFollowingMutation,
  useGetSearchMutation,
  useRepostFeedMutation,
  useDeleteProfileMutation,
  useSingupMutation,
  useVerifyOtpMutation
} = authApiSlice;
