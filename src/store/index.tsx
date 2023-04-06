import {combineReducers} from 'redux';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import productReducer from './product';
// import userReducer from './user';
import categoryReducer from './category';
import basketReducer from './basket';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
} from 'redux-persist';
// Api
import {commonApi} from './api';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  product: productReducer,
  category: categoryReducer,
  basket: basketReducer,
  [commonApi.reducerPath]: commonApi.reducer,
});
const persistConfig = {
  //verilerin nasıl depolanacağı ve anahtarların saklanması, sadece logini anahtarı saklanır şuan(white)
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['category', 'product', 'basket'],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: {
        warnAfter: 1000,
      },
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        warnAfter: 1000,
      },
    }).concat(thunk, commonApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
