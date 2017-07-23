global.rootPrefix = process.cwd();
require('dotenv').load();
process.env.INIT = true;
const readline = require('../utils/readline');
const hash = require('../utils/hash');
const { create, findByUsername } = require('../repositories/admin');

let username = '';
let password = '';

readline('Username: ')
.then(u => {
	username = u;
	return readline('Password: ', true);
})
.then(p => {
	password = p;
	if (!username) {
		console.log('Username cannot empty');
		process.exit(0);
	}
	if (!password) {
		console.log('Password cannot empty');
		process.exit(0);
	}
	findByUsername(username)
	.then(admin => {
		if (admin) {
			console.log('Account already exists!');
			return process.exit(0);
		}
		hash(password)
		.then(hashPassword => create({ username, password: hashPassword }))
		.then(admin => {
			console.log(admin);
			console.log('Account has been created!')
			process.exit(0);		
		})
		.catch(console.error);
	})
	.catch(console.error);
});
