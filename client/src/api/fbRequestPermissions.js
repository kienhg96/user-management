import Expo from 'expo';
import { FB_APP_ID } from '../constants/values';

const fbRequestPermissions = () => {
	const options = {
		permissions: ['email']
	}
	return Expo.Facebook.logInWithReadPermissionsAsync(FB_APP_ID, options);
};

export default fbRequestPermissions;
