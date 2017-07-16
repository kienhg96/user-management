import Storage from '../configs/Storage';

const adminLogout = () => new Promise((resolve, reject) => {
	const url = `/api/admin/logout`;
	Storage.getToken()
	.then(token => fetch(url, {
		method: 'GET',
		headers: new Headers({
			'X-Auth-Token': token
		})
	}))
	.then(response => response.json())
	.then(response => {
		Storage.removeToken();
		if (response.error) {
			return reject(response.error);
		}
		return resolve();
	})
	.catch(reject);
});

export default adminLogout;
