import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { DataType, getDateParams } from './types';

const url = '/api/proxy';
// const url = import.meta.env.VITE_DATA_URL as string;

export const dataApi = createApi({
  reducerPath: 'dataApi',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
  }),
  endpoints: (builder) => ({
    getData: builder.mutation<DataType[], getDateParams>({
      query: ({ token, station, artifact, historic }: getDateParams) => ({
        url: `?station=${station}&artifact=${artifact}&historic=${historic}`,
        method: 'GET',
        headers: { jfwt: token },
      }),
    }),
  }),
});

export const { useGetDataMutation } = dataApi;
