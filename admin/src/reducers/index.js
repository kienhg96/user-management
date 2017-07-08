import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';
import users from './users';
import loadings from './loadings';
import currentUser from './currentUser';

export default combineReducers({
	router,
	users,
	loadings,
	currentUser
});