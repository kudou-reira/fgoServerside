import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';
import searchReducer from './searchReducer';

export default combineReducers({
	users: usersReducer,
	auth: authReducer,
	admins: adminsReducer,
	search: searchReducer
});