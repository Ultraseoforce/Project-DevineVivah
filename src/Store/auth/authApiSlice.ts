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
    forgotPassword: "forgot-password",
    newPassword: "new-password",
    changepassword: "change-password",
  
  };

  export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder: any) => ({  
      login: builder.mutation({
        query: (credentials:  any)=> (
          console.log("credentials", credentials),
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
        query: ({ password }: any) => ( console.log(password),{
        
          url: URLS.changepassword,
          method: "POST",
          body: {password },
        }),
      }),
      newPassword: builder.mutation({
        query: ({password }: any) => ({
          url: URLS.newPassword,
          method: "POST",
          body: {password },
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

    }),
  });

  export const {
    useLoginMutation,
    useForgotPasswordMutation,
    useChangePasswordMutation,
    useNewPasswordMutation,
    useSingupMutation,
    useVerifyOtpMutation
  } = authApiSlice;
