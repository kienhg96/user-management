import { TOKEN_KEY } from '../constants/values';

class Storage {
	static getToken() {
		return new Promise(resolve => {
			resolve(localStorage.getItem(TOKEN_KEY));
		})
	}

	static setToken(token) {
		return new Promise(resolve => {
			localStorage.setItem(TOKEN_KEY, token);
			resolve();
		});
	}

	static removeToken() {
		return new Promise(resolve => {
			localStorage.removeItem(TOKEN_KEY);
		});
	}
}

export default Storage;
