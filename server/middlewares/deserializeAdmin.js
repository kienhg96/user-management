const { rootPrefix } = global;
const { findAdminByToken } = require(`${rootPrefix}/repositories/loginToken`);

const deserializeAdmin = (req, res, next) => {
	const token = req.get('X-Auth-Token');
	if (!token) {
		return next();
	}
	findAdminByToken(token, true)
	.then(loginToken => {
		if (loginToken && loginToken.admin) {
			req.admin = loginToken.admin;
			req.logout = () => {
				loginToken.remove();
			}
		}
		next();
	})
	.catch(err => {
		throw err;
	});
}

module.exports = deserializeAdmin;
