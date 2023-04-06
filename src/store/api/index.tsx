import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {baseUrl} from '../../constants';
import {productsParams} from '../product';
import {categoryParams} from '../category';

// Utils

export const commonApi = createApi({
  reducerPath: 'commonApi',
  baseQuery: fetchBaseQuery({baseUrl: baseUrl}),
  keepUnusedDataFor: 1,
  endpoints: builder => ({
    commonExample: builder.query<
      {
        //döndüreceği verinin tipini belirtmektedir.
        phone: string;
      },
      {
        // çağrılması için kullanılan parametrelerin tipini
        phone: string;
      }
    >({
      query: ({...patch}) => ({
        url: 'sm-login-register',
        method: 'POST',
        body: patch,
      }),
    }),
    commonExample2: builder.query<
      {
        userInfo: {authToken: string};
      },
      {
        phone: string;
        code: string;
      }
    >({
      query: ({...patch}) => ({
        url: 'sm-verify-code',
        method: 'POST',
        body: patch,
      }),
    }),
    commonExample3: builder.query<
      {
        categories: categoryParams[];
        products: productsParams[];
      },
      {
        _token: string;
      }
    >({
      query: ({_token}) => ({
        url: 'sm-get-categories-and-products',
        method: 'POST',
        body: {_token},
      }),
    }),
  }),
});

export const {
  useLazyCommonExampleQuery,
  useLazyCommonExample2Query,
  useLazyCommonExample3Query,
} = commonApi;
