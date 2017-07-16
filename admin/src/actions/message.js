import { SHOW_MESSAGE, CLOSE_MESSAGE } from '../constants/actionTypes';

export const showMessage = message => ({
	type: SHOW_MESSAGE,
	message
});

export const closeMessage = () => ({
	type: CLOSE_MESSAGE
});
