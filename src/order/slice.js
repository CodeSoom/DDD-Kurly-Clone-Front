import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  completion: false,
  error: false,
};

const { actions, reducer } = createSlice({
  name: 'order',
  initialState,
  reducers: {
    complete: (state) => ({
      ...state,
      completion: true,
    }),
  },
});

export const {
  complete,
} = actions;

export default reducer;
