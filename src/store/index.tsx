import {combineReducers} from 'redux';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import productReducer from './product';
// import userReducer from './user';
import categoryReducer from './category';
import basketReducer from './basket';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

const reducers = combineReducers({
  product: productReducer,
  // user: userReducer,
  category: categoryReducer,
  basket: basketReducer,
});
const persistConfig = {
  //verilerin nasıl depolanacağı ve anahtarların saklanması, sadece logini anahtarı saklanır şuan(white)
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['category', 'product', 'basket'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  //redux mağazası
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
