import { combineReducers } from 'redux';
import WhetherReducer from './reducer_whether'
const rootReducer = combineReducers({
  //state: (state = {}) => state
  weather:WhetherReducer
});

export default rootReducer;
