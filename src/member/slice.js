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

export const login = () => async () => {
  // TODO : memeber 관리 어떻게 이루어지는지 동우님께 인수인계 받고 해당 로직 구현할 예정
};

export default reducer;
