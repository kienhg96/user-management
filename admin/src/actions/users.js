import {
	SET_USERS,
	SET_PAGE,
	SET_TOTAL_PAGE
} from '../constants/actionTypes';
import { push } from 'react-router-redux';
import {
	createUserAPI,
	loadUsersAPI,
	updateUserAPI,
	deleteUsersAPI,
	loadTotalPageAPI
} from '../api';
import { showMessage } from './message';
import { setLoading } from './loading';

const setUsersAction = users => ({
	type: SET_USERS,
	users
});

const setPageAction = page => ({
	type: SET_PAGE,
	page
});

const setTotalPageAction = total => ({
	type: SET_TOTAL_PAGE,
	total
});

export const loadTotalPage = () => dispatch => {
	loadTotalPageAPI()
	.then(total => {
		dispatch(setTotalPageAction(total))
	})
	.catch(err => {
		console.error(err);
	})
}

export const nextPage = () => (dispatch, getState) => {
	const { page, total } = getState().users.info;
	if (page < total - 1) {
		dispatch(setPageAction(page + 1));
		dispatch(loadUsers());
	}
}

export const prevPage = () => (dispatch, getState) => {
	const { page } = getState().users.info;
	if (page > 0) {
		dispatch(setPageAction(page - 1));
		dispatch(loadUsers());
	}
}

export const loadUsers = page => (dispatch, getState) => {
	dispatch(setLoading(true));
	if (!page) {
		page = getState().users.info.page;
	}
	loadUsersAPI(page)
	.then(users => {
		dispatch(setLoading(false));
		dispatch(setUsersAction(users));
	})
	.catch(err => {
		dispatch(setLoading(false));
		dispatch(showMessage('An error occurs'));
		dispatch(push('/login'));
	});
}

export const addUser = ({ fullname, email, password }) => dispatch => {
	dispatch(setLoading(true));
	createUserAPI(fullname, email, password)
	.then(user => {
		dispatch(setLoading(false));
		dispatch(showMessage('Added an user successfully'));
		dispatch(push('/user'));
	})
	.catch(err => {
		dispatch(setLoading(false));
		dispatch(showMessage('Email already exists'));
		console.error(err);
	})
}

export const updateUser = ({ fullname, password, id }) => dispatch => {
	dispatch(setLoading(true));
	updateUserAPI(fullname, password, id)
	.then(user => {
		dispatch(setLoading(false));
		dispatch(showMessage('Added an user successfully'));
		dispatch(push('/user'));
	})
	.catch(err => {
		dispatch(setLoading(false));
		dispatch(showMessage('An error occurs'));
		console.log(err);
	});
}

export const deleteUsers = ids => (dispatch, getState) => {
	dispatch(setLoading(true));
	deleteUsersAPI(ids)
	.then(deletedIds => {
		dispatch(setLoading(false));
		dispatch(showMessage('Deleted users'));
		dispatch(loadUsers());
	})
	.catch(err => {
		dispatch(setLoading(false));
		dispatch(showMessage('An error occurs'));
		console.log(err);
	});
}
