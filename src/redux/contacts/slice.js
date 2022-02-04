import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookApi = createApi({
    reducerPath: 'phonebookApi',
    // baseQuery: fetchBaseQuery({ baseUrl: 'https://connections-api.herokuapp.com' }),
    baseQuery: fetchBaseQuery({ baseUrl: 'https://619d65ca131c600017088eee.mockapi.io/api/v1' }),
    tagTypes: ['Contact'],
    endpoints: builder => {
        return {
            fetchPhonebook: builder.query({
                query: () => '/contacts',
                providesTags: ['Contact'],
                // headers: (token)=>({Authorization: `Bearer ${createApi.getState().auth.token}`,})
            }),
                addContact: builder.mutation({
                    query: newContact => ({
                        url: '/contacts',
                        method: 'POST',
                        body: newContact,
                        // headers: {Authorization: `Bearer ${store.auth.token}`,}
                    }),
                    invalidatesTags: ['Contact'],
                    // headers: (token)=>({Authorization: `Bearer ${createApi.getState().auth.token}`,})
                }),
                    deleteContact: builder.mutation({
                        query: contactId => ({
                            url: `/contacts/${contactId}`,
                            method: 'DELETE',
                            // headers: {Authorization: `Bearer ${store.auth.token}`,}
                        }),
                        invalidatesTags: ['Contact'],
                    }),
        }
    }
    
    ,
});

export const {
    useFetchPhonebookQuery,
    useDeleteContactMutation,
    useAddContactMutation
} = phonebookApi;