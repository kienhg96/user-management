import { AsyncStorage } from 'react-native';
const TOKEN_KEY = 'TOKEN_KEY';

class Storage {
	static TOKEN_KEY = 'TOKEN_KEY';

	static getToken() {
		return AsyncStorage.getItem(TOKEN_KEY);
	}

	static setToken(token) {
		console.log('Set token', token);
		return AsyncStorage.setItem(TOKEN_KEY, token);
	}
}

export default Storage;
