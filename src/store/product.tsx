import {createSlice} from '@reduxjs/toolkit';
import {ProductsParams} from '../components/Product/type';

export type productsParams = {
  products: ProductsParams[];
};

const initialState: productsParams = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const {setProducts} = productsSlice.actions;
export default productsSlice.reducer;
