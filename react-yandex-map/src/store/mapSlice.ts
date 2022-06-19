import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import bd, { bdType } from './bd';

type initialStateType = {
  data: bdType[];
  idClickedElement: string;
  center: number[];
  isSidebarShow: boolean;
};

const initialState: initialStateType = {
  data: bd,
  idClickedElement: '',
  center: [53.83822, 27.473374],
  isSidebarShow: false,
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
    toggleSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarShow = action.payload;
    },
  },
});

export const { setElementClicked, setCenter, toggleSidebar } = mapSlice.actions;
export default mapSlice.reducer;
