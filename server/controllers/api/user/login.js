const { rootPrefix } = global;
const generateToken = require(`${rootPrefix}/utils/generateToken`);
const { findByEmail } = require(`${rootPrefix}/repositories/user`);
const { createSessionToken } = require(`${rootPrefix}/repositories/loginToken`);
const pickUser = require(`${rootPrefix}/utils/pickUser`);
const compare = require(`${rootPrefix}/utils/compare`);

const login = (req, res) => {
	const { email, password } = req.body;
	findByEmail(email)
	.then(user => {
		if (!user) {
			return res.json({
				error: 'User not found'
			});
		}
		compare(password, user.password)
		.then(result => {
			if (!result) {
				return res.json({
					error: "Incorrect password"
				});
			}
			createSessionToken(user._id)
			.then(loginToken => {
				return res.json({
					user: pickUser(user),
					token: loginToken.token
				});
			})
			.catch(err => {
				console.error(err);
			})
		})
		.catch(err => {
			console.error(err);
		});
	})
	.catch(err => {
		console.error(err);
	})
}

module.exports = login;
