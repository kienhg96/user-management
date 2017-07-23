import { USER_LIMIT_PAGE } from '../constants/values';
import Storage from '../configs/Storage';

const loadTotalPage = () => new Promise((resolve, reject) => {
	const url = '/api/users/count';
	Storage.getToken()
	.then(token => fetch(url, {
		method: 'GET',
		headers: new Headers({
			'X-Auth-Token': token
		})
	}))
	.then(response => response.json())
	.then(response => {
		if (response.error) {
			return reject(response.error);
		}
		return resolve(Math.ceil(response.count / USER_LIMIT_PAGE));
	})
	.catch(reject);
});

export default loadTotalPage;
