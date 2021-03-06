import { SET_USER, UPDATE_USER } from '../constants/actionTypes';
import { NavigationActions } from 'react-navigation';
import { 
	loginAPI, 
	getUserAPI,
	updateUserAPI,
	logoutAPI,
	signupAPI,
	fbLoginServerAPI,
	fbRequestPermissionsAPI
} from '../api';
import alert from '../utils/alert';

const { navigate, reset } = NavigationActions;

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
		dispatch(reset({
			index: 0,
			actions: [
				navigate({ routeName: 'Home' })
			]
		}));
	})
	.catch(error => {
		alert('Login Failed', 'Email or password is incorrect');
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
			dispatch(reset({
				index: 0,
				actions: [
					navigate({ routeName: 'Home' })
				]
			}));
		} else {
			console.log('Not login');
		}
	})
	.catch(error => {
		console.log(error);
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

export const logout = () => dispatch => {
	logoutAPI()
	.then(() => {
		dispatch(reset({
			index: 0,
			actions: [
				navigate({ routeName: 'Login'})
			]
		}));
	})
	.catch(error => {
		console.error(error);
	});
}

export const signup = ({ email, fullname, password }) => dispatch => {
	signupAPI(email, fullname, password)
	.then(() => {
		dispatch(reset({
			index: 0,
			actions: [
				navigate({ routeName: 'Login'})
			]
		}));
	})
	.catch(error => {
		console.log(error);
		alert('Signup failed', 'Email already exists');
	});
}

export const fbLogin = () => dispatch => {
	fbRequestPermissionsAPI()
	.then(({type, token}) => {
		if (type === 'success') {
			fbLoginServerAPI(token)
			.then(user => {
				dispatch(setUserAction(user));
				dispatch(reset({
					index: 0,
					actions: [
						navigate({ routeName: 'Home' })
					]
				}));
			})
			.catch(err => {
				console.error(err);
			});
		} else {
			alert('Facebook Login', 'Login failed');
		}
	})
	.catch(err => {
		console.error(err);
	})
}
