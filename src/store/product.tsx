import {createSlice} from '@reduxjs/toolkit';
import {ProductsParams} from '../components/Product/type';

export type productsParams = {
  products: ProductsParams[];
  cart: ProductsParams[];
};

const initialState: productsParams = {
  products: [],
  cart: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      state.cart = state.cart || [];
      state.cart.push(action.payload); //yeni bir ürünü gönderiyoruz
    },
  },
});

export const {setProducts, addToCart} = productsSlice.actions;
export default productsSlice.reducer;
