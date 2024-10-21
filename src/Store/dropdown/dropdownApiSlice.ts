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
            transformResponse: (responseData: any, meta: any, arg: any) => {
              const data = responseData.data;
              return data;
            },
          }),

          getState: builder.query({
            query: () => `${URLS.state}`,
            transformResponse: (responseData: any, meta: any, arg: any) => {
              const data = responseData.data;
              return data;
            },
          }),

          getCity: builder.query({
            // query: (id: string) => `${URLS.city}?state_id=${id}`,
            query: (state_id: string) => `city?state_id=${state_id}`,
            transformResponse: (responseData: any, meta: any, arg: any) => {
              const data = responseData.data;
              return data;
            },
          }),
    }),
});

export const {
useGetCityQuery,
useGetStateQuery,
useGetCountryQuery
} = dropDownApiSlice;
