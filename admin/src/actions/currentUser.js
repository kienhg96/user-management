import { SET_CURRENT_USER } from '../constants/actionTypes';
import { getUserAPI } from '../api';
import { push } from 'react-router-redux';
import { showMessage } from './message';
import { setLoading } from './loading';

const setCurrentUserAction = user => ({
	type: SET_CURRENT_USER,
	user
});

export const loadCurrentUser = id => dispatch => {
	dispatch(setLoading(true));
	getUserAPI(id)
	.then(user => {
		dispatch(setLoading(false));
		if (!user) {
			return dispatch(push('/user'));
		}
		dispatch(setCurrentUserAction(user));
	})
	.catch((error) => {
		dispatch(showMessage('An error occurs'));
		console.error(error);
	});
}
