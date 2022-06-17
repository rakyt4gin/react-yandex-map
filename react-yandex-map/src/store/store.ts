import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import mapSlice from './mapSlice';

const RootReducer = combineReducers({
  mapSlice: mapSlice,
});

const Store = () => {
  return configureStore({
    reducer: RootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(fetchApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  });
};

export default Store;
export type StoreType = ReturnType<typeof Store>;
export type ReducerType = ReturnType<typeof RootReducer>;
export type StoreDispatchType = StoreType['dispatch'];
