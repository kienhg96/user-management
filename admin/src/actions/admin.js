import { loginAPI, getAdminAPI, adminLogoutAPI } from '../api';
import { SET_ADMIN, RESET_ADMIN } from '../constants/actionTypes';
import { push } from 'react-router-redux';

const setAdminAction = admin => ({
	type: SET_ADMIN,
	admin
});

const resetAdminAction = () => ({
	type: RESET_ADMIN
});

export const login = ({ username, password }) => dispatch => {
	loginAPI(username, password)
	.then(admin => {
		dispatch(setAdminAction(admin));
		dispatch(push('/user'));
	})
	.catch(error => {
		console.log(error);
	});
}

export const logout = () => dispatch => {
	adminLogoutAPI()
	.then(() => {
		dispatch(resetAdminAction());
		dispatch(push('/login'));
	})
	.catch(err => {
		console.log(err);
	});
}

export const getAdmin = () => (dispatch, getState) => {
	const { pathname } = getState().router.location;
	getAdminAPI()
	.then(admin => {
		if (admin) {
			dispatch(setAdminAction(admin));
			if (pathname === "/login") {
				dispatch(push('/user'));
			}
		} else {
			if (pathname !== '/login') {
				dispatch(push('/login'));
			}
		}
	})
	.catch(error => {
		console.log(error);
	});
}
