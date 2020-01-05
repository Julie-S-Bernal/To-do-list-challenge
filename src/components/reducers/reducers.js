import { combineReducers } from 'redux';

import createUser from './createUser';
import loginUser from './loginUser';
import logoutUser from './logoutUser';
import createToDo from './createToDo';


const reducers = combineReducers({
  loginUser : loginUser,
  createUser : createUser,
  logoutUser: logoutUser,
  createToDo: createToDo
});

export default reducers;
