
import { corApi } from "./corApi";


export const userApi = corApi.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => ({
        url: `general/user/${id}`,
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    getAdmins: builder.query({
      query: () => ({
        url: `mangement/admins`,
        method: "GET",
      }),
      providesTags: ["Admins"],
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "client/customers",
        method: "GET",
      }),
      providesTags: ["Customers"],
    }),
    getAllTransactions: builder.query({
      query: ({ sort, search, page, pageSize }) => ({
        url: "client/transactions",
        method: "GET",
        params: {
          sort,
          search,
          page,
          pageSize,
        },
      }),
      providesTags: ["Transaction"],
    }),
    getGeography: builder.query({
      query: () => ({
        url: "client/geography",
        method: "GET",
      }),
      providesTags: ["Geography"],
    }),
  }),
});


export const { useGetUserQuery, 
               useGetAllUsersQuery ,
               useGetAllTransactionsQuery,
               useGetGeographyQuery ,
               useGetAdminsQuery} = userApi;