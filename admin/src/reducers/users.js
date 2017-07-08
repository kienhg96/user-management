import users from '../dummy/users';
import { ADD_USER } from '../constants/actionTypes';

export default (state = users, action) => {
	switch (action.type) {
		case ADD_USER:
			return [...state, action.user];
		default:
			return state;
	}
}
