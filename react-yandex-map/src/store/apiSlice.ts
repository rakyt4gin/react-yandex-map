import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export type dbType = {
  id: string;
  type: 'road' | 'place' | 'area';
  title: string;
  hint: string;
  description: string;
  geometry: string;
  images?: string;
  more?: string;
};

export const mapApi = createApi({
  reducerPath: 'mapApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://warm-mountain-35292.herokuapp.com',
  }),

  endpoints: (builder) => ({
    getMapObjects: builder.query<dbType[], any>({
      query: () => `/map-objects`,
    }),
  }),
});

export const { useGetMapObjectsQuery } = mapApi;
