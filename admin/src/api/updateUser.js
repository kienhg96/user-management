import Storage from '../configs/Storage';
import userCvt from '../utils/userCvt';

const updateUser = (fullname, password, id) => new Promise((resolve, reject) => {
	const url = `/api/user`;
	Storage.getToken()
	.then(token => fetch(url, {
		method: 'PUT',
		headers: new Headers({
			'Content-Type': 'application/json',
			'X-Auth-Token': token
		}),
		body: JSON.stringify({ fullname, password, id })
	}))
	.then(response => response.json())
	.then(response => {
		if (response.error) {
			return reject(response.error);
		}
		return resolve(userCvt(response.user));
	})
	.catch(reject);
});

export default updateUser;
