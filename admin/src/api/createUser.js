import userCvt from '../utils/userCvt';

const createUser = (fullname, email, password) => new Promise((resolve, reject) => {
	const url = '/api/user';
	fetch(url, {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify({ fullname, email, password })
	})
	.then(response => response.json())
	.then(response => {
		if (response.error) {
			return reject(response.error);
		}
		return resolve(userCvt(response.user));
	})
	.catch(reject);
});

export default createUser;
