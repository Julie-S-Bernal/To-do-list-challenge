import { combineReducers } from 'redux';

import createUser from './createUser';

const reducers = combineReducers({
 createUser : createUser
});

export default reducers;
