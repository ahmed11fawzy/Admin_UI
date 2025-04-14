
import { corApi } from "./corApi";


export const userApi = corApi.injectEndpoints({
    endpoints: (builder) => ({
      getUser: builder.query({
        query: (id) => ({
          url: `general/user/${id}`,
          method: 'GET',
        }),
        providesTags: ['User'],
    }),
      getAllUsers: builder.query({
        query: () => ({
          url: 'client/customers',
          method: 'GET',
        }),
        providesTags: ['Customers'],
      }),
    getAllTransactions: builder.query({
        query: ({sort,search,page,pageSize}) => ({
          url: 'client/transactions',
          method: 'GET',
          params: {
            sort ,
            search ,
            page ,
            pageSize ,
          },
        }),
        providesTags: ['Transaction'],
      }),
  }),
});


export const { useGetUserQuery, useGetAllUsersQuery ,useGetAllTransactionsQuery } = userApi;