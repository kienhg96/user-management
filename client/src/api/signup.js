import urlParser from '../utils/url';

const signup = (email, fullname, password) => new Promise((resolve, reject) => {
	const url = urlParser('/api/user');
	fetch(url, {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify({ email, password, fullname })
	})
	.then(response => response.json())
	.then(response => {
		if (response.error) {
			return reject(response.error);
		}
		return resolve();
	})
	.catch(error => {
		reject(error);
	});
});

export default signup;
