import { combineReducers } from 'redux';

import createUser from './createUser';
import loginUser from './loginUser';
import logoutUser from './logoutUser';


const reducers = combineReducers({
  loginUser : loginUser,
  createUser : createUser,
  logoutUser: logoutUser
});

export default reducers;
