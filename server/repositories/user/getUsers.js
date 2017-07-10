const { rootPrefix } = global;
const User = require(`${rootPrefix}/models/User`);

const getUsers = (page, limit) => new Promise((resolve, reject) => {
	User.find()
		.limit(limit)
		.skip(page * limit)
		.exec((err, users) => {
			if (err) {
				return reject(err);
			}
			return resolve(users);
		});
});

module.exports = getUsers;
