import urlParser from '../utils/url';
import Storage from '../configs/Storage';

const fbLoginServer = fbToken => new Promise((resolve, reject) => {
	const url = urlParser('/api/user/fbLogin');
	fetch(url, {
		method: 'POST',
		headers: new Headers({
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify({ fbToken })
	})
	.then(response => response.json())
	.then(response => {
		if (response.error) {
			return reject(response.error);
		}
		Storage.setToken(response.token)
		.then(() => {
			resolve(response.user);
		})
		.catch(error => {
			reject(error);
		});
	})
	.catch(error => {
		reject(error);
	});
});

export default fbLoginServer;
