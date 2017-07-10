import { SET_ADMIN } from '../constants/actionTypes';

export default (state = {}, action) => {
	switch (action.type) {
		case SET_ADMIN:
			return action.admin;
		default:
			return state;
	}
}
