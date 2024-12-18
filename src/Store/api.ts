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



export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: "Auth",
  tagTypes: ["Auth", "Profile", "Image"], // Add appropriate tags
  endpoints: (builder) => ({}),
});