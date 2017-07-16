import { SET_CURRENT_USER } from '../constants/actionTypes';
import { getUserAPI } from '../api';
import { push } from 'react-router-redux';

const setCurrentUserAction = user => ({
	type: SET_CURRENT_USER,
	user
});

export const loadCurrentUser = id => dispatch => {
	getUserAPI(id)
	.then(user => {
		if (!user) {
			return dispatch(push('/user'));
		}
		dispatch(setCurrentUserAction(user));
	})
	.catch((error) => {
		console.error(error);
	});
}
