const { rootPrefix } = global;
const LoginToken = require(`${rootPrefix}/models/LoginToken`);
const User = require(`${rootPrefix}/models/User`);
const generateToken = require(`${rootPrefix}/utils/generateToken`);
const findById = require('./findById');

const createSessionToken = _id =>
new Promise((resolve, reject) => {
	findById(_id)
	.then(loginToken => {
		if (loginToken) {
			return loginToken.remove();
		}
	})
	.then(() => generateToken())
	.then(token => {
		const loginToken = new LoginToken({ token, _id });
		return loginToken.save();
	})
	.then(loginToken => {
		resolve(loginToken)
	})
	.catch(err => {
		reject(err);
	});
});

module.exports = createSessionToken;
