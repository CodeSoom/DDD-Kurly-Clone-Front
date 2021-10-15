import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loginFields: {
    id: null,
    password: null,
  },
};

const { actions, reducer } = createSlice({
  name: 'member',
  initialState,
  reducers: {
    changeLoginField(state, { payload: { name, value } }) {
      return {
        ...state,
        loginFields: {
          ...state.loginFields,
          [name]: value,
        },
      };
    },
  },
});

export const {
  changeLoginField,
} = actions;

export default reducer;
