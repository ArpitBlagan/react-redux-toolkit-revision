import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "https://jsonplaceholder.typicode.com";

const api = createApi({
  reducerPath: "items", // Updated to a simple string identifier
  baseQuery: fetchBaseQuery({ baseUrl: API_URL, credentials: "include" }),
  endpoints: (builder) => ({
    getItems: builder.query({
      query: () => ({ url: "/posts", method: "GET" }),
    }),
    createItem: builder.mutation({
      query: (newItem) => ({
        url: "/create/item",
        method: "POST",
        body: newItem,
      }),
    }),
  }),
});

export const { useGetItemsQuery, useCreateItemMutation } = api;
export default api;
