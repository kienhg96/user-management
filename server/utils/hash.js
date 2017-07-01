const bcrypt = require('bcrypt-nodejs');

const hash = password => new Promise((resolve, reject) => {
	if (!password) {
		return resolve(null);
	}
	bcrypt.hash(password, null, null, (err, hashPassword) => {
		if (err) {
			return reject(err);
		};
		return resolve(hashPassword);
	});
});

module.exports = hash;
