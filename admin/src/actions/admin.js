import { loginAPI, getAdminAPI, adminLogoutAPI } from '../api';
import { SET_ADMIN, RESET_ADMIN } from '../constants/actionTypes';
import { push } from 'react-router-redux';
import { showMessage } from './message';
import { setLoading } from './loading';
import { loadTotalPage } from './users';

const setAdminAction = admin => ({
	type: SET_ADMIN,
	admin
});

export const resetAdminAction = () => ({
	type: RESET_ADMIN
});

export const login = ({ username, password }) => dispatch => {
	dispatch(setLoading(true));
	loginAPI(username, password)
	.then(admin => {
		dispatch(setAdminAction(admin));
		dispatch(push('/user'));
		dispatch(setLoading(false));
		dispatch(loadTotalPage());
	})
	.catch(error => {
		dispatch(setLoading(false));
		dispatch(showMessage('Username or password is incorrect'));
		console.log(error);
	});
}

export const logout = () => dispatch => {
	dispatch(setLoading(true));
	adminLogoutAPI()
	.then(() => {
		dispatch(setLoading(false));
		dispatch(resetAdminAction());
		dispatch(push('/login'));
	})
	.catch(err => {
		dispatch(setLoading(false));
		dispatch(showMessage('An error occurs'));
		console.log(err);
	});
}

export const getAdmin = () => (dispatch, getState) => {
	const { pathname } = getState().router.location;
	dispatch(setLoading(true));
	getAdminAPI()
	.then(admin => {
		dispatch(setLoading(false));
		if (admin) {
			dispatch(setAdminAction(admin));
			dispatch(loadTotalPage());
			if (pathname === "/login") {
				dispatch(push('/user'));
			}
		} else {
			if (pathname !== '/login') {
				dispatch(showMessage('You have been logged out'));
				dispatch(push('/login'));
			}
		}
	})
	.catch(error => {
		dispatch(setLoading(false));
		dispatch(showMessage('Cannot authenticate'));
		console.log(error);
	});
}
