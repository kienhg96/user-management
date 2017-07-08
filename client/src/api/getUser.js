import urlParser from '../utils/url';
import Storage from '../configs/Storage';

const getUser = () => new Promise((resolve, reject) => {
	const url = urlParser('/api/user');
	Storage.getToken()
	.then(token => {
		fetch(url, {
			method: 'GET',
			headers: new Headers({
				'X-Auth-Token': token
			})
		})
		.then(response => response.json())
		.then(response => {
			if (response.error) {
				return reject(response.error);
			}
			return resolve(response.user)
		})
		.catch(reject);
	})
	.catch(reject);
});

export default getUser;
