import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  redirectToMapPage: boolean;
};

const initialState: initialStateType = {
  redirectToMapPage: false,
};

const appSlice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setRedirectToMapPage: (state, action: PayloadAction<boolean>) => {
      state.redirectToMapPage = action.payload;
    },
  },
});

export const { setRedirectToMapPage } = appSlice.actions;
export default appSlice.reducer;
