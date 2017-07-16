import { SHOW_MESSAGE, CLOSE_MESSAGE } from '../constants/actionTypes';

const DEFAULT_STATE = {
	message: '',
	open: false
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SHOW_MESSAGE:
			return {
				open: true,
				message: action.message
			}
		case CLOSE_MESSAGE:
			return {
				open: false
			}
		default:
			return state;
	}
}
