import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api";

const AuthAdapter = createEntityAdapter({});
const initialState = AuthAdapter.getInitialState();

const URLS = {
  country: "country",
  state: "state",
  city: "city",
};

export const dropDownApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    getCountry: builder.query({
      query: () => `${URLS.country}`,
      transformResponse: (responseData: any) => responseData.data,
    }),
    getState: builder.query({
      query: (country_id: string) => `${URLS.state}?country_id=${country_id}`,
      transformResponse: (responseData: any) => responseData.data,
    }),
    getCity: builder.query({
      query: (state_id: string) => `${URLS.city}?state_id=${state_id}`,
      transformResponse: (responseData: any) => responseData.data,
    }),
  }),
});

export const {
  useGetCityQuery,
  useGetStateQuery,
  useGetCountryQuery,
} = dropDownApiSlice;