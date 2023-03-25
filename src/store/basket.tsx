import {createSlice} from '@reduxjs/toolkit';
import {ProductsParams} from '../components/Product/type';

export interface ProductWithQuantity extends ProductsParams {
  quantity: number;
  amount: number;
}
export type basketParams = {
  cart: ProductWithQuantity[];
  totalAmount: number;
};

const initialState: basketParams = {
  cart: [],
  totalAmount: 0,
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload; //değeri aldın
      const existingProductIndex = state.cart.findIndex(
        //sepet içinde verilen product_guid özniteliğine sahip bir ürünün zaten var olup olmadığını kontrol ediyor.
        item => item.product_guid === productToAdd.product_guid,
      );
      //"product_guid" özelliği cart dizisinde bulunamazsa, -1 değerini döndürür
      if (existingProductIndex !== -1) {
        const data = state.cart[existingProductIndex];
        //-1 den büyükse yani cart dizininde ürünün bulup bulunmadığını kontrol eder.
        // Ürün sepette zaten var, miktarı artır
        state.cart[existingProductIndex].quantity += 1;
        state.cart[existingProductIndex].amount = +(
          data.amount + +productToAdd.default_price
        ).toFixed(2);
      } else {
        //ürün sepette yok ekle
        state.cart.push({
          ...productToAdd,
          quantity: 1,
          amount: +productToAdd.default_price,
        });
      }
      state.totalAmount = +(
        state.totalAmount + +productToAdd.default_price
      ).toFixed(2);
    },
    removeToCart: state => {
      state.cart = initialState.cart;
      state.totalAmount = 0;
    },
    decreaseQuantity: (state, action) => {
      const productToRemove = action.payload;
      const existingProductIndex = state.cart.findIndex(
        item => item.product_guid === productToRemove.product_guid,
      );
      if (existingProductIndex !== -1) {
        if (state.cart[existingProductIndex].quantity > 1) {
          const data = state.cart[existingProductIndex];
          state.cart[existingProductIndex].quantity -= 1;
          state.cart[existingProductIndex].amount = +(
            data.amount - +productToRemove.default_price
          ).toFixed(2);
        } else {
          state.cart = state.cart.filter(
            value => value.product_guid !== productToRemove.product_guid,
          );
        }
        state.totalAmount = +(
          state.totalAmount - +productToRemove.default_price
        ).toFixed(2);
      }
    },
  },
});

export const {addToCart, removeToCart, decreaseQuantity} = basketSlice.actions;
export default basketSlice.reducer;
