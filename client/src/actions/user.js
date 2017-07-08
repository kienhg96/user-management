import { SET_USER, UPDATE_USER } from '../constants/actionTypes';
import { NavigationActions } from 'react-navigation';
import { 
	loginAPI, 
	getUserAPI,
	updateUserAPI
} from '../api';

const { navigate } = NavigationActions;

const setUserAction = user => ({
	type: SET_USER,
	user
});

const updateUserAction = user => ({
	type: UPDATE_USER,
	user
});

export const login = ({email, password}) => dispatch => {
	loginAPI(email, password)
	.then(user => {
		dispatch(setUserAction(user));
		dispatch(navigate({ routeName: 'Home' }));
	})
	.catch(error => {
		console.error(error);
	});
}

export const update = ({ fullname }) => dispatch => {
	updateUserAPI({ fullname })
	.then(() => {
		dispatch(updateUserAction({ fullname }));
		dispatch(navigate({ routeName: 'ViewInfo' }));
	})
	.catch(error => {
		console.error(error);
	});
}

export const getUser = () => dispatch => {
	getUserAPI()
	.then(user => {
		if (user) {
			dispatch(setUserAction(user));
			dispatch(navigate({ routeName: 'Home' }));
		} else {
			console.log('Not login');
		}
	})
	.catch(error => {
		console.error(error);
	});
}

export const changePassword = password => dispatch => {
	updateUserAPI({ password })
	.then(() => {
		dispatch(navigate({ routeName: 'ViewInfo' }));
	})
	.catch(error => {
		console.error(error);
	});
}
