import { combineReducers } from 'redux';

import memberReducer from '../member/slice';

export default combineReducers({
  member: memberReducer,
});
