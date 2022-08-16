import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import db, { dbStoreType } from './db';

type initialStateType = {
  data: dbStoreType[];
  idClickedElement: string;
  center: number[];
  zoom: number;
  isSidebarShow: boolean;
  isSidebarRightShow: boolean;
};

const initialState: initialStateType = {
  data: db,
  idClickedElement: '',
  center: [53.896586, 27.548635],
  zoom: 16,
  isSidebarShow: false,
  isSidebarRightShow: false,
};

const mapSlice = createSlice({
  name: 'mapSlice',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<dbStoreType[]>) => {
      state.data = action.payload;
    },
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
    toggleSidebarRight: (state, action: PayloadAction<boolean>) => {
      state.isSidebarRightShow = action.payload;
    },
  },
});

export const { setElementClicked, setCenter, toggleSidebar, setZoom, toggleSidebarRight, setData } =
  mapSlice.actions;
export default mapSlice.reducer;
