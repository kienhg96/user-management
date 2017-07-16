import Storage from '../configs/Storage';
import adminCvt from '../utils/adminCvt';

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
		resolve(adminCvt(response.admin));
	})
	.catch(reject)
});

export default getAdmin;
