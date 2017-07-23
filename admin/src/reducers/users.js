import {
	SET_USERS,
	SET_PAGE,
	SET_TOTAL_PAGE
} from '../constants/actionTypes';
import { combineReducers } from 'redux';

const data = (state = [], action) => {
	switch (action.type) {
		case SET_USERS:
			return action.users;
		default:
			return state;
	}
}

const info = (state = { page: 0, total: 5 }, action) => {
	switch (action.type) {
		case SET_PAGE:
			return {
				...state,
				page: action.page
			};
		case SET_TOTAL_PAGE:
			return {
				...state,
				total: action.total
			};
		default:
			return state;
	}
}

export default combineReducers({
	data,
	info
});
