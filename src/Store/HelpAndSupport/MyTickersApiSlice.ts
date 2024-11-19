import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api";


const AuthAdapter = createEntityAdapter({});

const initialState = AuthAdapter.getInitialState();

const URLS = {
    allTicket: "all-tickets",
    ticketissues: "all-issues",
    addticket: "add-ticket",
    updateticketread: "update-ticket-read-status",
    ticketreply: "add-ticket-reply",
    ticketdetails: "get-ticket"
};

export const MyTickersSlice = apiSlice.injectEndpoints({
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
        getAllTicket: builder.query({
            query: (status?: number) => {
              const url = status != null ? `${URLS.allTicket}?ticket_status=${status}` : `${URLS.allTicket}`;
              return url;
            },
            transformResponse: (responseData: any) => {
              const data = responseData.data;
              return data;
            },
          }),
        UpdateTicketReadStatus: builder.query({
            query: (ticket_id: number) => `${URLS.updateticketread}?ticket_id=${ticket_id}`,
            transformResponse: (responseData: any, meta: any, arg: any) => {
                const data = responseData.data;
                return data;
            },
        }),
        getTicketIssue: builder.query({
            query: () => `${URLS.ticketissues}`,
            transformResponse: (responseData: any, meta: any, arg: any) => {
                const data = responseData.data;
                return data;
            },
        }),


    }),
});

export const {
    useGetAllTicketQuery,
    useGetTicketIssueQuery,
    useAddTicketMutation,
    useAddTicketReplyMutation,
    useGetTicketdetailsMutation,
    useUpdateTicketReadStatusQuery,
} = MyTickersSlice;
