import Storage from '../configs/Storage';
import userCvt from '../utils/userCvt';

const loadUsers = (page = 0, limit = 15) => new Promise((resolve, reject) => {
	const url = `/api/users?page=${page}&limit=${limit}`;
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
});

export default loadUsers;
