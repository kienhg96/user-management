const { rootPrefix } = global;
const { findUserByToken } = require(`${rootPrefix}/repositories/loginToken`);

const deserializeUser = (req, res, next) => {
	const token = req.get('X-Auth-Token');
	if (!token) {
		return next();
	}
	findUserByToken(token, true)
	.then(loginToken => {
		if (loginToken && loginToken.user) {
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
