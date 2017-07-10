const Admin = require(`${rootPrefix}/models/Admin`);

const create = ({ username, password }) => 
new Promise((resolve, reject) => {
	const admin = new Admin({
		username,
		password
	});
	admin.save(err => {
		if (err) {
			return reject(err);
		}
		return resolve(admin);
	});
});

module.exports = create;
