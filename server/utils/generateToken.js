const crypto = require('crypto');

const generateToken = (size = 16) => new Promise((resolve, reject) => {
	crypto.randomBytes(size, function(err, buffer) {
		if (err) {
			return reject(err);
		}
		const token = buffer.toString('hex');
		return resolve(token);
	});	
});

module.exports = generateToken;
