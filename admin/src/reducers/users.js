import {
	SET_USERS,
	SET_PAGE,
	SET_TOTAL_PAGE,
	SET_SEARCHING,
	SET_SEARCH_QUERY
} from '../constants/actionTypes';
import { combineReducers } from 'redux';

const INFO_DEFAULT_STATE = {
	page: 0,
	total: 5,
	searching: false,
	query: ''
};

const data = (state = [], action) => {
	switch (action.type) {
		case SET_USERS:
			return action.users;
		default:
			return state;
	}
}

const info = (state = INFO_DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_SEARCH_QUERY:
			return {
				...state,
				query: action.query
			};
		case SET_SEARCHING:
			return {
				...state,
				searching: action.searching
			};
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
