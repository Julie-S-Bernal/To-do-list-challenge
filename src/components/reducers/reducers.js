import { combineReducers } from 'redux';

import createUser from './createUser';
import loginUser from './loginUser';
import logoutUser from './logoutUser';
import createToDo from './createToDo';
import getToDos from './getToDos';
// import getToDo from './getToDo';


const reducers = combineReducers({
  loginUser : loginUser,
  createUser : createUser,
  logoutUser: logoutUser,
  createToDo: createToDo,
  getToDos: getToDos,
  // getToDo: getToDo
});

export default reducers;
