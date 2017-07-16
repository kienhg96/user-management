import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';
import users from './users';
import loading from './loading';
import currentUser from './currentUser';
import admin from './admin';
import message from './message';

export default combineReducers({
	router,
	users,
	loading,
	currentUser,
	admin,
	message
});
