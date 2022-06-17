import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type initialStateType = {
  idClickedElement: string;
};

const initialState: initialStateType = {
  idClickedElement: '',
};

const mapSlice = createSlice({
  name: 'mapSlice',
  initialState,
  reducers: {
    setElementClicked: (state, action: PayloadAction<string>) => {
      state.idClickedElement = action.payload;
    },
  },
});

export const { setElementClicked } = mapSlice.actions;
export default mapSlice.reducer;
