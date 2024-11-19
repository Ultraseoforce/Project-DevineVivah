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
  logout: "logout"

};

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    login: builder.mutation({
      query: (credentials: any) => (
        {
          url: URLS.login,
          method: "POST",
          body: { ...credentials },
        }),
    }),
    forgotPassword: builder.mutation({
      query: (mobile: number) => ({
        url: URLS.forgotPassword,
        method: "POST",
        body: { mobile },
      }),
    }),
    changePassword: builder.mutation({
      query: ({ password }: any) => (console.log(password), {

        url: URLS.changepassword,
        method: "POST",
        body: { password },
      }),
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
    }),
    deleteProfileImg: builder.mutation({
      query: (data: any) => ({
        url: URLS.deletedImg,
        method: "POST",
        body: data,
      }),
    }),

    getProfile: builder.query({
      query: () => `https://devinevivah.isce.co.in/api/profile`,
      transformResponse: (responseData: any, meta: any, arg: any) => {
        const data = responseData.data;
        return data;
      },
    }),
    userLogOut: builder.mutation({
      query: () => ({
        url: URLS.logout,  // Assuming this is the endpoint for logout (use GET)
        method: 'GET',  // Use GET instead of POST
      }),
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
