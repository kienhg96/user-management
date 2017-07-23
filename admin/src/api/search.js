import Storage from '../configs/Storage';
import userCvt from '../utils/userCvt';
import { USER_LIMIT_PAGE } from '../constants/values';

const search = (query, page = 0, limit = USER_LIMIT_PAGE) => new Promise((resolve, reject) => {
	const url = `/api/user/search?query=${query}&page=${page}&limit=${limit}`;
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
		return resolve(userCvt(response.users));
	})
	.catch(reject);
})

export default search;
