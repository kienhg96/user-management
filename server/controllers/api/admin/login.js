const { rootPrefix } = global;
const generateToken = require(`${rootPrefix}/utils/generateToken`);
const { findByUsername } = require(`${rootPrefix}/repositories/admin`);
const compare = require(`${rootPrefix}/utils/compare`);
const { createSessionToken } = require(`${rootPrefix}/repositories/loginToken`);
const pickAdmin = require(`${rootPrefix}/utils/pickAdmin`);

const login = (req, res) => {
	const { username, password } = req.body;
	findByUsername(username)
	.then(admin => {
		if (!admin) {
			return res.json({
				error: "Admin not found"
			})
		}
		compare(password, admin.password)
		.then(result => {
			if (!result) {
				return res.json({
					error: "Incorrect password"
				});
			}
			createSessionToken(admin._id)
			.then(loginToken => {
				return res.json({
					admin: pickAdmin(admin),
					token: loginToken.token
				});
			})
			.catch(err => {
				console.error(err);
			})
		})
		.catch(err => {
			console.error(err);
		})
	})
	.catch(err => {
		console.error(err);
	})
}

module.exports = login;
