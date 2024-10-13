import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logOut } from "./auth/authSlice";
import { env } from "../env";

const baseQuery = fetchBaseQuery({
  baseUrl: env.VITE_API_BASE,
  prepareHeaders: (headers, { getState }: any) => {
    const token = getState().persistedReducer.auth.token;
    console.log("api call token=>>>>>>>>>>>>>>>>>>>>>", token)

    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args: any, api: any, extraOptions: any) => {
  let result = await baseQuery(args, api, extraOptions);

  if (
    (result?.error?.status === 401 || result?.error?.status == 403) &&
    args.url !== "auth/login"
  ) {
    api.dispatch(logOut({}));
  }
  return result;
};

// const BuyerbaseQuery = fetchBaseQuery({
//   baseUrl: env.VITE_API_BASE_MONETIZATION,
//   prepareHeaders: (headers, { getState }: any) => {
//     // const token = getState().persistedReducer.buyerauth.token;
//     const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Y2NhZDkyMzQxMTc3NWJjMDVhZGRkMiIsImVtYWlsIjoia3JpdGlwYXRlbDIzMDJAZ21haWwuY29tIiwicm9sZSI6ImNyZWF0b3IiLCJpYXQiOjE3MTE2MDA0NTUsImV4cCI6MTcxMjIwNTI1NX0._Lnh_zX4r1sA6OOrhLhxGQ3YViiXShZ2ZEbgj0gpY5k`;
//     // Buyer
//     // const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1YWUwYTg5ZDBiNWEwNGNiYWZiZWViYiIsImVtYWlsIjoia3JpdGlwYXRlbDIwMjRAZ21haWwuY29tIiwicm9sZSI6ImJ1eWVyIiwiaWF0IjoxNzExOTQ2OTYzLCJleHAiOjE3MTI1NTE3NjN9._3znxb5kQPEYD3-y3GjsYDUHvX6c1-QFp9V8adpa5HE`;
//     if (token) {
//       headers.set("authorization", `Bearer ${token}`);
//     }
//     return headers;
//   },
// });

// const BuyerbaseQueryWithReauth = async (
//   args: any,
//   api: any,
//   extraOptions: any
// ) => {
//   let result = await BuyerbaseQuery(args, api, extraOptions);
//   if (
//     (result?.error?.status === 401 || result?.error?.status == 403) &&
//     args.url !== "auth/login"
//   ) {
//     api.dispatch(logOut({}));
//   }

//   return result;
// };

// export const emptySplitApi = createApi({
//   baseQuery: baseQuery,

//   reducerPath: "monetization",
//   tagTypes: ["Creator"],
//   endpoints: () => ({}),
// });

export const apiSlice: any = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: "Auth",
  tagTypes: [
    "Auth",
    "User",
    "Grow",
    "LinkPlus",
    "CONNECTION",
    "TICKET",
    "NOTIF",
    "FAQ",
    "POST",
    "Coupon",
    "Creator",
  ],
  endpoints: (builder) => ({}),
});
