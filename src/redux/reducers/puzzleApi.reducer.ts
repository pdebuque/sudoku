import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { Puzzle } from '../../model';

export const puzzleApi = createApi({
  reducerPath: 'puzzleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Puzzle'],
  endpoints: (builder) => ({
    getRandomPuzzle: builder.query({
      query: () => '/api/puzzle/random',
      providesTags: ['Puzzle']
    }),
    startPuzzle: builder.mutation({
      query: (id: string) => ({
        url: `/api/puzzle/${id}/start`,
        method: 'PUT',
        body: id
      })
    })
  })
})


// custom hook based on the name of generated endpoint
export const { useGetRandomPuzzleQuery, useStartPuzzleMutation } = puzzleApi;