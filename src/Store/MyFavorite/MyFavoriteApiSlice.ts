import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api";


const AuthAdapter = createEntityAdapter({});

const initialState = AuthAdapter.getInitialState();

const URLS = {
    favoritepeople: "my-favorite-people",
    profile_detelis: "profile",
    ticketissues: "all-issues",
    addticket: "add-ticket",
    updateticketread: "update-ticket-read-status",
    ticketreply: "add-ticket-reply",
    ticketdetails: "get-ticket"
};

export const MyFavoriteSlice = apiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        AddTicket: builder.mutation({
            query: (body: any) => ({
                url: URLS.addticket,
                method: "POST",
                body: body,
            }),
        }),
        AddTicketReply: builder.mutation({
            query: (body: any) => ({
                url: URLS.ticketreply,
                method: "POST",
                body: body,
            }),
        }),
        getTicketdetails: builder.mutation({
            query: (ticketId: number) => ({
                url: `${URLS.ticketdetails}?ticket_id=${ticketId}`,
                method: "GET",
            }),
            transformResponse: (responseData: any) => {
                return responseData;
            },
        }),

        getPeopleDetelis: builder.query({
            query: (mId: number) => `${URLS.profile_detelis}?mId=${mId}`,
            transformResponse: (responseData: any) => {
                return responseData.data;
            },
        }),

        getFavoritePeople: builder.query({
            query: () => `${URLS.favoritepeople}`,
            transformResponse: (responseData: any, meta: any, arg: any) => {
                const data = responseData.data;
                return data;
            },
        }),


    }),
});

export const {
    useGetFavoritePeopleQuery,
    useAddTicketMutation,
    useAddTicketReplyMutation,
    useGetTicketdetailsMutation,
   useGetPeopleDetelisQuery
} = MyFavoriteSlice;
