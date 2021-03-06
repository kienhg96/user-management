const { rootPrefix } = global;
const User = require(`${rootPrefix}/models/User`);

const findByEmail = email => new Promise((resolve, reject) => {
	User.findOne({ email })
	.exec((err, user) => {
		if (err) {
			return reject(err);
		}
		return resolve(user);
	});
});

module.exports = findByEmail;
