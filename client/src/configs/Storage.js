import { AsyncStorage } from 'react-native';
import { TOKEN_KEY } from '../constants/values';

class Storage {
	static getToken() {
		return AsyncStorage.getItem(TOKEN_KEY);
	}

	static setToken(token) {
		return AsyncStorage.setItem(TOKEN_KEY, token);
	}

	static removeToken() {
		return AsyncStorage.removeItem(TOKEN_KEY);		
	}
}

export default Storage;
