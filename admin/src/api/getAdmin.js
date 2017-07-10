import Storage from '../configs/Storage';

const getAdmin = () => new Promise((resolve, reject) => {
	const url = '/api/admin';
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
		return resolve(response.admin);
	})
	.catch(reject)
});

export default getAdmin;
