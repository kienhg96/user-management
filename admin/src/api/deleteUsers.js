import Storage from '../configs/Storage';

const deleteUsers = ids => new Promise((resolve, reject) => {
	const url = '/api/users';
	Storage.getToken()
	.then(token => fetch(url, {
		method: 'DELETE',
		headers: new Headers({
			'X-Auth-Token': token,
			'Content-Type': 'application/json'
		}),
		body: JSON.stringify({ ids })
	}))
	.then(response => response.json())
	.then(response => {
		if (response.error) {
			return reject(response.error);
		}
		return resolve(response.deletedIds);
	})
	.catch(reject);
});

export default deleteUsers;
