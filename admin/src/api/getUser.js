import Storage from '../configs/Storage';
import userCvt from '../utils/userCvt';

const getUser = id => new Promise((resolve, reject) => {
	const url = `/api/user?id=${id}`;
	Storage.getToken()
	.then(token => fetch(url, {
		method: 'GET',
		headers: new Headers({
			"X-Auth-Token": token
		})
	}))
	.then(response => response.json())
	.then(response => {
		resolve(userCvt(response.user));
	})
	.catch(reject);
});

export default getUser;
