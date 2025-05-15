import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TokenResponse } from './types';

const url = import.meta.env.VITE_TOKEN_URL as string;
const key = import.meta.env.VITE_SECRET_KEY as string;

export const tokenApi = createApi({
  reducerPath: 'tokenApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    getToken: builder.mutation<TokenResponse, void>({
      query: () => ({
        url: '',
        method: 'GET',
        headers: { 'x-jf-apikey': key },
      }),
    }),
  }),
});

export const { useGetTokenMutation } = tokenApi;
