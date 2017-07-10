import { loginAPI, getAdminAPI } from '../api';
import { SET_ADMIN } from '../constants/actionTypes';
import { push } from 'react-router-redux';
import adminCvt from '../utils/adminCvt';

const setAdminAction = admin => ({
	type: SET_ADMIN,
	admin
});

export const login = ({ username, password }) => dispatch => {
	loginAPI(username, password)
	.then(admin => {
		dispatch(setAdminAction(adminCvt(admin)));
		dispatch(push('/user'));
	})
	.catch(error => {
		console.log(error);
	});
}

export const getAdmin = () => (dispatch, getState) => {
	getAdminAPI()
	.then(admin => {
		const { pathname } = getState().router.location;
		if (admin) {
			dispatch(setAdminAction(adminCvt(admin)));
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
