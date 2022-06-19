import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import bd, { bdType } from './bd';

type initialStateType = {
  data: bdType[];
  idClickedElement: string;
  center: number[];
};

const initialState: initialStateType = {
  data: bd,
  idClickedElement: '',
  center: [53.897063, 27.539198],
};

const mapSlice = createSlice({
  name: 'mapSlice',
  initialState,
  reducers: {
    setElementClicked: (state, action: PayloadAction<string>) => {
      state.idClickedElement = action.payload;
    },
    setCenter: (state, action: PayloadAction<number[]>) => {
      state.center = action.payload;
    },
  },
});

export const { setElementClicked, setCenter } = mapSlice.actions;
export default mapSlice.reducer;
