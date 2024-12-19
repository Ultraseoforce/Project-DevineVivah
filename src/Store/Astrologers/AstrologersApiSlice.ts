import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api";

const AuthAdapter = createEntityAdapter({});

const initialState = AuthAdapter.getInitialState();

const URLS = {
    myfavoriteastrologer: "my-favorite-astrologer",
    addfavoriteastrologer: "add-favorite-astrologer"
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
            query: (body: any) => ({
                url: URLS.addfavoriteastrologer,
                method: "POST",
                body: body,
            }),
        }),

    }),
});

export const {
    useGetFavoriteAstrologerQuery,
    useAddFavoriteAstrologerMutation
} = AstrologersSlice;