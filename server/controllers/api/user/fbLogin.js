const { rootPrefix } = global;
const generateToken = require(`${rootPrefix}/utils/generateToken`);
const { create, findByEmail } = require(`${rootPrefix}/repositories/user`);
const pickUser = require(`${rootPrefix}/utils/pickUser`);
const fbGraphRequest = require(`${rootPrefix}/utils/fbGraphRequest`);
const { createSessionToken } = require(`${rootPrefix}/repositories/loginToken`);

const fbLogin = (req, res) => {
	const { fbToken } = req.body;
	fbGraphRequest(fbToken)
	.then(result => {
		if (result.error) {
			return res.status(400).json({
				error: 'Login failed'
			});
		}
		const { id: fbId, email, name: fullname } = result;
		return findByEmail(email)
		.then(user => {
			if (user) {
				// Login
				if (!user.fbId) {
					user.fbId = fbId;
					user.save(err => {
						if (err) {
							console.error(err);
						}
					});
				}
				return createSessionToken(user._id)
				.then(loginToken => {
					res.json({
						user: pickUser(user),
						token: loginToken.token
					});
				})
			} else {
				// Create new
				return create({ fbId, email, fullname })
				.then(user => {
					return createSessionToken(user._id)
					.then(loginToken => {
						res.json({
							user: pickUser(user),
							token: loginToken.token
						});
					})
				})
			}
		})
	})
	.catch(err => {
		console.error(err);
	});
}

module.exports = fbLogin;
