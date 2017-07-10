const Admin = require(`${rootPrefix}/models/Admin`);

const findByUsername = username => new Promise((resolve, reject) => {
	Admin.findOne({ username })
	.exec((err, admin) => {
		if (err) {
			return reject(err);
		}
		return resolve(admin);
	});
});

module.exports = findByUsername;
