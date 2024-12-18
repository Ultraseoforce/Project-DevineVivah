import { createEntityAdapter } from "@reduxjs/toolkit";

import { apiSlice } from "../api";


const AuthAdapter = createEntityAdapter({});

const initialState = AuthAdapter.getInitialState();

const URLS = {
  login: "login",
  singUp: "signup",
  verifyotp: "verify-otp",
  forgotPassword: "forgot-password",
  newPassword: "new-password",
  changepassword: "change-password",
  profiledata: "profile",
  uploadImg: "upload-profile-image",
  deletedImg: "delete-profile-image",
  logout: "logout",
  profile: "profile"

};

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    login: builder.mutation({
      query: (credentials: any) => ({
        url: URLS.login,
        method: "POST",
        body: { ...credentials },
      }),
      invalidatesTags: ["Auth"],
    }),
    forgotPassword: builder.mutation({
      query: (mobile: number) => ({
        url: URLS.forgotPassword,
        method: "POST",
        body: { mobile },
      }),
    }),
    changePassword: builder.mutation({
      query: ({ password }: any) => ({
        url: URLS.changepassword,
        method: "POST",
        body: { password },
      }),
      invalidatesTags: ["Auth"],
    }),
    newPassword: builder.mutation({
      query: ({ password }: any) => ({
        url: URLS.newPassword,
        method: "POST",
        body: { password },
      }),
    }),
    singup: builder.mutation({
      query: (data: any) => ({
        url: URLS.singUp,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    verifyOtp: builder.mutation({
      query: (data: any) => ({
        url: URLS.verifyotp,
        method: "POST",
        body: data,
      }),
    }),
    uploadProfileImg: builder.mutation({
      query: (data: any) => ({
        url: URLS.uploadImg,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Image"],
    }),
    deleteProfileImg: builder.mutation({
      query: (data: any) => ({
        url: URLS.deletedImg,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Image"],
    }),
    getProfile: builder.query({
      query: () => `${URLS.profile}`,
      transformResponse: (responseData: any) => {
        const data = responseData.data;
        return data;
      },
      providesTags: ["Profile"],
    }),
    userLogOut: builder.mutation({
      query: () => ({
        url: URLS.logout,
        method: "GET",
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});


export const {
  useLoginMutation,
  useForgotPasswordMutation,
  useChangePasswordMutation,
  useNewPasswordMutation,
  useSingupMutation,
  useVerifyOtpMutation,
  useUploadProfileImgMutation,
  useDeleteProfileImgMutation,
  useGetProfileQuery,
  useUserLogOutMutation
} = authApiSlice;
