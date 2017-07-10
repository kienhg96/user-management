const { rootPrefix } = global;
const LoginToken = require(`${rootPrefix}/models/LoginToken`);
const Admin = require(`${rootPrefix}/models/Admin`);

const findAdminByToken = (token, populate = false) => 
new Promise((resolve, reject) => {
	LoginToken.find({ token })
	.then(loginToken => {
		if (!loginToken) {
			return resolve(null)
		}
		if (!populate) {
			return resolve(loginToken);
		}
		Admin.findById(loginToken._id)
		.exec((err, admin) => {
			if (err) {
				return reject(err);
			}
			loginToken.admin = admin;
			return resolve(loginToken);
		});
	})
	.catch(err => {
		throw err;
	});
});

module.exports = findAdminByToken;
