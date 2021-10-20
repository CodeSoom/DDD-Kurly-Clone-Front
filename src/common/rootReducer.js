import { combineReducers } from 'redux';

import memberReducer from '../member/slice';
import orderReducer from '../order/slice';

export default combineReducers({
  member: memberReducer,
  order: orderReducer,
});
