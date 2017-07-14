import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form'
import mainReducer from './reducerMain';

export default combineReducers({
  main: mainReducer,
});
