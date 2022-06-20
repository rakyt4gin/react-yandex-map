import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import db, { dbType } from './db';

type initialStateType = {
  data: dbType[];
  idClickedElement: string;
  center: number[];
  zoom: number;
  isSidebarShow: boolean;
};

const initialState: initialStateType = {
  data: db,
  idClickedElement: '',
  center: [53.83822, 27.473374],
  zoom: 16,
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
    setZoom: (state, action: PayloadAction<number>) => {
      state.zoom = action.payload;
    },
    toggleSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarShow = action.payload;
    },
  },
});

export const { setElementClicked, setCenter, toggleSidebar, setZoom } = mapSlice.actions;
export default mapSlice.reducer;
