import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const photosApi = createApi({
    reducerPath: 'photos',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001/'
    }),
    endpoints(builder) {
        return {
            fetchPhotos: builder.query({
                providesTags: (result, error, albumId ) => [{ type: 'Photo', id: albumId }],
                query: (albumId) => {
                    console.log(albumId,'here')
                    return {
                        url: '/photos',
                        params: {
                            albumId: albumId
                        },
                        method: 'GET'
                    };
                }
            }),
            addPhoto: builder.mutation({
                invalidatesTags: (result, error, { albumId }) => [{ type: 'Photo', id: albumId }],
                query: (photo) => {
                    return {
                        url: '/photos',
                        method: 'POST',
                        body: photo
                    };
                }
            }),
            removePhoto: builder.mutation({
                invalidatesTags: (result, error, { albumId }) => [{ type: 'Photo', id: albumId }],
                query: ({id}) => {
                    return {
                        url: `/photos/${id}`,
                        method: 'DELETE',
                    };
                }
            }),
        }
    }
});

export const { useFetchPhotosQuery, useAddPhotoMutation, useRemovePhotoMutation } = photosApi;
export { photosApi };