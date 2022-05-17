import changeTheNumber from './upDown';
import { combineReducers } from 'redux';
import multTheNumber from './mult';

const rootReducer = combineReducers({
  changeTheNumber,
  multTheNumber
})

export default rootReducer;