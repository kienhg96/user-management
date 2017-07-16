import { SET_USERS } from '../constants/actionTypes';
import { push } from 'react-router-redux';
import {
	createUserAPI,
	loadUsersAPI,
	updateUserAPI,
	deleteUsersAPI
} from '../api';


const setUsersAction = users => ({
	type: SET_USERS,
	users
});

export const loadUsers = page => (dispatch, getState) => {
	if (!page) {
		page = getState().users.info.page;
	}
	loadUsersAPI(page)
	.then(users => {
		dispatch(setUsersAction(users));
	})
	.catch(err => {
		dispatch(push('/login'));
	})
}

export const addUser = ({ fullname, email, password }) => dispatch => {
	createUserAPI(fullname, email, password)
	.then(user => {
		dispatch(push('/user'));
	})
	.catch(err => {
		console.error(err);
	})
}

export const updateUser = ({ fullname, password, id }) => dispatch => {
	updateUserAPI(fullname, password, id)
	.then(user => {
		dispatch(push('/user'));
	})
	.catch(err => {
		console.log(err);
	});
}

export const deleteUsers = ids => (dispatch, getState) => {
	deleteUsersAPI(ids)
	.then(deletedIds => {
		dispatch(loadUsers());
	})
	.catch(err => {
		console.log(err);
	});
}
