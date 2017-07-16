import { SET_CURRENT_USER } from '../constants/actionTypes';

const DEFAULT_STATE = {
	id: '',
	fullname: '',
	email: ''
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_CURRENT_USER:
			return action.user;
		default:
			return state;
	}
}
