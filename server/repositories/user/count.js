const { rootPrefix } = global;
const User = require(`${rootPrefix}/models/User`);

const count = () => new Promise((resolve, reject) => {
	User.find().count((err, userCount) => {
		if (err) {
			return reject(err);
		}
		return resolve(userCount);
	});
});

module.exports = count;
