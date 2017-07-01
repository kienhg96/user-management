const bcrypt = require('bcrypt-nodejs');

const compare = (password, hashPassword) =>
new Promise((resolve, reject) => {
	bcrypt.compare(password, hashPassword, (err, result) => {
		if (err) {
			return reject(err);
		}
		return resolve(result);
	});
});

module.exports = compare;
