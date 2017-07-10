const { rootPrefix } = global;
const User = require(`${rootPrefix}/models/User`);

const removeById = id => new Promise((resolve, reject) => {
	User.findByIdAndRemove(id, err => {
		if (err) {
			return reject(err);
		}
		return resolve();
	})
});

module.exports = removeById;
