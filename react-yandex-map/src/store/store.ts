import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import aboutSlice from './aboutSlice';
import { mapApi } from './apiSlice';
import mapSlice from './mapSlice';

const RootReducer = combineReducers({
  [mapApi.reducerPath]: mapApi.reducer,
  mapSlice: mapSlice,
  about: aboutSlice,
});

const Store = () => {
  return configureStore({
    reducer: RootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(mapApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export default Store;
export type StoreType = ReturnType<typeof Store>;
export type ReducerType = ReturnType<typeof RootReducer>;
export type StoreDispatchType = StoreType['dispatch'];
