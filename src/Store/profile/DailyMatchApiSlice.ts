import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api";


const AuthAdapter = createEntityAdapter({});

const initialState = AuthAdapter.getInitialState();

const URLS = {
    nearMeProfiles: 'near-me-profiles',
    dailyMatchProfileView: 'daily-match-profile-view',
    recentVisitorsProfiles: 'recent-visitors-profiles',
    myMatchesProfiles: 'my-matches-profiles',
    dailyMatchesProfiles: 'daily-matches-profiles',
    newMatchesProfiles: 'new-matches-profiles',
};

export const dailyMatchSlice = apiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        getNearMeProfiles: builder.query({
            query: () => `${URLS.nearMeProfiles}`,
            transformResponse: (responseData: any, meta: any, arg: any) => {
                console.log("responseData.data", responseData.data)
                const data = responseData.data;
                return data;
            },
        }),
       
        getDailyMatchProfileView: builder.mutation({
            query: (mId: string) => ({
              url: `${URLS.dailyMatchProfileView}?mId=${mId}`,
              method: 'GET',
            }),
            transformResponse: (responseData: any) => responseData.data,
          }),

          getRecentVisitorsProfiles: builder.query({
            query: () => `${URLS.recentVisitorsProfiles}`,
            transformResponse: (responseData: any) => responseData.data,
          }),

          getMyMatchesProfiles: builder.query({
            query: () => `${URLS.myMatchesProfiles}`,
            transformResponse: (responseData: any) => responseData.data,
          }),

        getDailyMatchesProfiles: builder.query({
            query: () => `${URLS.dailyMatchesProfiles}`,
            transformResponse: (responseData: any) => responseData.data,
        }),
        getNewMatchesProfiles: builder.query({
            query: () => `${URLS.newMatchesProfiles}`,
            transformResponse: (responseData: any) => responseData.data,
          }),
    }),
});

export const {
    useGetNearMeProfilesQuery,
    useGetRecentVisitorsProfilesQuery,
    useGetMyMatchesProfilesQuery,
    useGetDailyMatchProfileViewMutation,
    useGetDailyMatchesProfilesQuery,
    useGetNewMatchesProfilesQuery,
} = dailyMatchSlice;
