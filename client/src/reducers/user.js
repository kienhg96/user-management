import { SET_USER, UPDATE_USER } from '../constants/actionTypes';

const DEFAULT_STATE = {
	fullname: '',
	email: ''
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SET_USER:
			return action.user;
		case UPDATE_USER:
			return {
				...state,
				...action.user
			}
		default:
			return state;
	}
}
