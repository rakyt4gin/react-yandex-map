import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import director from '../pages/about/img/director.jpg';
import me from '../pages/about/img/me.jpg';
import ten from '../pages/about/img/10.jpg';

type initialStateType = {
  AboutPageVisible: boolean;
  data: {
    id: number;
    title: string;
    img: any;
    text: string;
  }[];
};

const initialState: initialStateType = {
  AboutPageVisible: false,
  data: [
    {
      id: 1,
      title: 'Калачевский Глеб Викторович',
      img: director,
      text: 'Директор. Руководитель проекта. Новатор',
    },
    {
      id: 2,
      title: 'Скринник Андрей Дмитриевич',
      img: me,
      text: 'Frontend Developer',
    },
    {
      id: 3,
      title: "11 'П' класс",
      img: ten,
      text: 'Информационное обеспечение',
    },
  ],
};

const aboutSlice = createSlice({
  name: 'mapSlice',
  initialState,
  reducers: {
    setAboutPageVisible: (state, action: PayloadAction<boolean>) => {
      state.AboutPageVisible = action.payload;
    },
    setData: (state, action: PayloadAction<initialStateType>) => {
      state.data = action.payload.data;
    },
  },
});

export const { setData, setAboutPageVisible } = aboutSlice.actions;
export default aboutSlice.reducer;
