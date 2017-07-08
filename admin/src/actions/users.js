import { ADD_USER } from '../constants/actionTypes';
import { push } from 'react-router-redux';

const addUserAction = user => ({
	type: ADD_USER,
	user
});

function random32bit() {
	let u = new Uint32Array(1);
	window.crypto.getRandomValues(u);
	let str = u[0].toString(16).toUpperCase();
	return '00000000'.slice(str.length) + str;
}

export const addUser = info => dispatch => {
	info.id = random32bit();
	dispatch(addUserAction(info));
	dispatch(push('/user'));
}
