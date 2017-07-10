const { rootPrefix } = global;
const LoginToken = require(`${rootPrefix}/models/LoginToken`);
const User = require(`${rootPrefix}/models/User`);

const findUserByToken = (token, populate = false) => 
new Promise((resolve, reject) => {
	LoginToken.find({ token })
	.then(loginToken => {
		if (!loginToken) {
			return resolve(null)
		}
		if (!populate) {
			return resolve(loginToken);
		}
		User.findById(loginToken._id)
		.exec((err, user) => {
			if (err) {
				return reject(err);
			}
			loginToken.user = user;
			return resolve(loginToken);
		});
	})
	.catch(err => {
		throw err;
	});
});

module.exports = findUserByToken;
