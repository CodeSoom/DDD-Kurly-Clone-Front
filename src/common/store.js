import { configureStore } from '@reduxjs/toolkit';

import memberReducer from '../member/slice';

const store = configureStore({
  reducer: {
    member: memberReducer,
  },
});

export default store;
