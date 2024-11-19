import { createEntityAdapter } from "@reduxjs/toolkit";

import { apiSlice } from "../api";

const AuthAdapter = createEntityAdapter({});

const initialState = AuthAdapter.getInitialState();

const URLS = {
    personal: "update-personal-details",
    education: "update-education-details",
    profession: "update-profession-details",
    family: "update-family-details",
    preferences: "update-preferences-details",
    location: "update-location-details",
    verification: "update-verification-details",
    profileImage: "upload-profile-image",
    allProfile: "all-profiles",
    profile: "profile",
    deleteProfileImg: "delete-profile-image",
    addFavorite: "add-favorite-profile",
    removeFavorite: "remove-favorite-profile",
    favoritepeople: "my-favorite-people",
    myfavoriteastrologer: "my-favorite-astrologer"
};

export const profileApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder: any) => ({
        updatePersonalDetails: builder.mutation({
            query: (body: any) => ({
                url: `${URLS.personal}`,
                method: "POST",
                body: body,
            }),
        }),

        updateEducationDetails: builder.mutation({
            query: (body: any) => ({
                url: `${URLS.education}`,
                method: "POST",
                body: body,
            }),
        }),

        updateProfessionDetails: builder.mutation({
            query: (body: any) => ({
                url: `${URLS.profession}`,
                method: "POST",
                body: body,
            }),
        }),

        updateFamilyDetails: builder.mutation({
            query: (body: any) => ({
                url: `${URLS.family}`,
                method: "POST",
                body: body,
            }),
        }),
        updatePreferencesDetails: builder.mutation({
            query: (body: any) => ({
                url: `${URLS.preferences}`,
                method: "POST",
                body: body,
            }),
        }),
        updateLocationDetails: builder.mutation({
            query: (body: any) => ({
                url: `${URLS.location}`,
                method: "POST",
                body: body,
            }),
        }),
        updateVerificationDetails: builder.mutation({
            query: (body: any) => ({
                url: `${URLS.verification}`,
                method: "POST",
                body: body,
            }),
        }),
        uploadProfileImage: builder.mutation({
            query: (body: any) => ({
                url: `${URLS.profileImage}`,
                method: "POST",
                body: body,
            }),
        }),
        deleteProfileImage: builder.mutation({
            query: (body: any) => ({
                url: `${URLS.deleteProfileImg}`,
                method: "POST",
                body: body,
            }),
        }),
        addFavoriteProfile: builder.mutation({
            query: (body: any) => ({
                url: `${URLS.addFavorite}`,
                method: "POST",
                body: body,
            }),
        }),
        removeFavoriteProfile: builder.mutation({
            query: (body: any) => ({
                url: `${URLS.removeFavorite}`,
                method: "POST",
                body: body,
            }),
        }),
        getAllProfiles: builder.query({
            query: () => `${URLS.allProfile}`,
            transformResponse: (responseData: any, meta: any, arg: any) => {
              const data = responseData.data;
              return data;
            },
          }),
      
        getMyFavoritePeople: builder.query({
            query: () => `${URLS.favoritepeople}`,
            transformResponse: (responseData: any, meta: any, arg: any) => {
              const data = responseData.data;
              return data;
            },
          }),
        getProfile: builder.query({
            query: () => `${URLS.profile}`,
            transformResponse: (responseData: any, meta: any, arg: any) => {
              const data = responseData.data;
              return data;
            },
          }),
          getFavoriteAstrologer: builder.query({
            query: () => `${URLS.myfavoriteastrologer}`,
            transformResponse: (responseData: any, meta: any, arg: any) => {
              const data = responseData.data;
              return data;
            },
          }),


    }),
});

export const {
useUpdatePersonalDetailsMutation,
useUpdateEducationDetailsMutation,
useUpdateProfessionDetailsMutation,
useUpdateFamilyDetailsMutation,
useUpdatePreferencesDetailsMutation,
useUpdateLocationDetailsMutation,
useUpdateVerificationDetailsMutation,
useUploadProfileImageMutation,
useDeleteProfileImageMutation,
useAddFavoriteMutation,
useRemoveFavoriteMutation,
getAllProfilesQuery,
getProfilsQuery,
useGetMyFavoritePeopleQuery,
useGetFavoriteAstrologerQuery
} = profileApiSlice;
