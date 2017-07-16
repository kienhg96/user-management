import { SET_ADMIN, RESET_ADMIN } from '../constants/actionTypes';

const DEFAULT_STATE = {
	id: '',
	username: ''
};

export default (state = {}, action) => {
	switch (action.type) {
		case RESET_ADMIN:
			return DEFAULT_STATE;
		case SET_ADMIN:
			return action.admin;
		default:
			return state;
	}
}
