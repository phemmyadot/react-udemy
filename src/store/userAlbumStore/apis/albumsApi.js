import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/'
    }),
    endpoints(builder) {
        return {
            fetchAlbums: builder.query({
                providesTags: (result, error, userId ) => [{ type: 'Album', id: userId }],
                query: (userId) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: userId
                        },
                        method: 'GET'
                    };
                }
            }),
            addAlbum: builder.mutation({
                invalidatesTags: (result, error, { userId }) => [{ type: 'Album', id: userId }],
                query: (album) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: album
                    };
                }
            }),
            removeAlbum: builder.mutation({
                invalidatesTags: (result, error, { userId }) => [{ type: 'Album', id: userId }],
                query: ({id}) => {
                    return {
                        url: `/albums/${id}`,
                        method: 'DELETE',
                    };
                }
            }),
        }
    }
});

export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumMutation } = albumsApi;
export { albumsApi };