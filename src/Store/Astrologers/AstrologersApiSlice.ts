import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api";

const AuthAdapter = createEntityAdapter({});

const initialState = AuthAdapter.getInitialState();

const URLS = {
    myfavoriteastrologer: "my-favorite-astrologer",
    addfavoriteastrologer: "add-favorite-astrologer",
    famousastrologers: "famous-astrologers",
    removeFavoriteAstrologer: "remove-favorite-astrologer",
    astrologerProfile: "astrologer-profile",
    astrologerReviews: "astrologer-reviews"


};

export const AstrologersSlice = apiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        getFavoriteAstrologer: builder.query({
            query: () => `${URLS.myfavoriteastrologer}`,
            transformResponse: (responseData: any) => {
                return responseData.data;
            },
        }),

        addFavoriteAstrologer: builder.mutation({
            query: (astrologer_id: string) => ({
                url: URLS.addfavoriteastrologer,
                method: "POST",
                body: { astrologer_id },
            }),
        }),


        getFamousAstrologers: builder.query({
            query: () => `${URLS.famousastrologers}`,
            transformResponse: (responseData: any) => {
                return responseData.data;
            },
        }),

        removeFavoriteAstrologer: builder.mutation({
            query: (astrologer_id: string) => ({
                url: `${URLS.removeFavoriteAstrologer}`,
                method: "POST",
                body: { astrologer_id },
            }),
        }),

        getAstrologerProfile: builder.query({
            query: (astrologer_id: string) => ({
                url: `${URLS.astrologerProfile}`,
                method: "POST",
                body: { astrologer_id },
            }),
            transformResponse: (responseData: any) => {
                return responseData.data;
            },
        }),

        getAstrologerReviews: builder.query({ // Added new query
            query: (user_id: string) => `${URLS.astrologerReviews}?user_id=${user_id}`,
            transformResponse: (responseData: any) => {
                return responseData.data;
            },
        }),

    }),
});

export const {
    useGetFavoriteAstrologerQuery,
    useAddFavoriteAstrologerMutation,
    useGetFamousAstrologersQuery,
    useRemoveFavoriteAstrologerMutation,
    useGetAstrologerProfileQuery,
    useGetAstrologerReviewsQuery
} = AstrologersSlice;