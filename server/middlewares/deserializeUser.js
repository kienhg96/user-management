const { rootPrefix } = global;
const { findByToken } = require(`${rootPrefix}/repositories/loginToken`);

const deserializeUser = (req, res, next) => {
	const token = req.get('X-Auth-Token');
	if (!token) {
		return next();
	}
	findByToken(token, true)
	.then(loginToken => {
		if (loginToken) {
			req.user = loginToken.user;
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

module.exports = deserializeUser;
