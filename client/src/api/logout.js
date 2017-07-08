import urlParser from '../utils/url';
import Storage from '../configs/Storage';

const logout = () => new Promise((resolve, reject) => {
	const url = urlParser('/api/user/logout');
	Storage.getToken()
	.then(token => {
		fetch(url, {
			method: 'GET',
			headers: new Headers({
				'X-Auth-Token': token
			})
		})
		.then(() => Storage.removeToken())
		.then(() => resolve())
		.catch(reject);
	})
	.catch(reject);
});

export default logout;
