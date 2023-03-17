import {createSlice} from '@reduxjs/toolkit';

export type categoryParams = {
  categories: {
    id: number;
    category_guid: string;
    title: string;
    image: string;
    subcats: {
      id: number;
      totalid: number;
      category_guid: string;
      top_category_guid: string;
      title: string;
      product_count: number;
    }[];
  }[];
};

const initialState: categoryParams = {
  categories: [],
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const {setCategories} = categorySlice.actions;
export default categorySlice.reducer;
