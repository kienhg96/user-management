const { rootPrefix } = global;
const User = require(`${rootPrefix}/models/User`);

const findById = id => new Promise((resolve, reject) => {
	User.findById(id)
	.exec((err, user) => {
		if (err) {
			return reject(err);
		}
		return resolve(user);
	});
});

module.exports = findById;
