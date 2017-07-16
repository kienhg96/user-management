import { SET_USERS } from '../constants/actionTypes';
import { combineReducers } from 'redux';

const data = (state = [], action) => {
	switch (action.type) {
		case SET_USERS:
			return action.users;
		default:
			return state;
	}
}

const info = (state = { page: 0 }, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default combineReducers({
	data,
	info
});
