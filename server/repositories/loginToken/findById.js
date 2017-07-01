const { rootPrefix } = global;
const LoginToken = require(`${rootPrefix}/models/LoginToken`);
const User = require(`${rootPrefix}/models/User`);

const findById = (_id, populate = false) => 
new Promise((resolve, reject) => {
	LoginToken.find({ _id })
	.then(loginToken => {
		if (!loginToken) {
			return resolve(null);
		}
		if (!populate) {
			return resolve(loginToken);
		}
		User.findById(_id).exec((err, user) => {
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

module.exports = findById;
