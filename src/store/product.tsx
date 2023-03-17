import {createSlice} from '@reduxjs/toolkit';

export type productsParams = {
  products: {
    main_category_guid: string;
    category_guid: string;
    product_guid: string;
    title: string;
    image: string;
    default_price: string;
    price: string;
    group: number;
    max_profit_rate: string;
    min_profit_rate: string;
    default_profit_rate: string;
    current_profit_rate: string;
    first_action_discount: string;
    second_action_discount: string;
    third_action_discount: string;
    fourth_action_discount: string;
    fifth_action_discount: string;
    sixth_action_discount: string;
    images: string[];
  }[];
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
