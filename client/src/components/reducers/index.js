import { combineReducers } from 'redux';
import teacherReducer from '../reducers/teacher';

export default combineReducers({
  teacher: teacherReducer
});