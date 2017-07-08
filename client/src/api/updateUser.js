import urlParser from '../utils/url';
import Storage from '../configs/Storage';

const updateUser = ({ fullname, password }) => new Promise((resolve, reject) => {
	const url = urlParser('/api/user');
	const body = {};
	if (fullname) {
		body.fullname = fullname;
	}
	if (password) {
		body.password = password;
	}
	Storage.getToken()
	.then(token => {
		fetch(url, {
			method: 'PUT',
			headers: new Headers({
				'Content-Type': 'application/json',
				'X-Auth-Token': token
			}),
			body: JSON.stringify(body)
		})
		.then(response => response.json())
		.then(response => {
			if (response.error) {
				return reject(response.error);
			}
			return resolve(response.user);
		})
		.catch(reject)
	})
	.catch(reject)
});

export default updateUser;
