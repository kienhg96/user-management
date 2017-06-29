const { create, findByEmail } = require('../../../repositories/user');
const pickUser = require('../../../utils/pickUser');

const createUser = (req, res) => {
	const { fullname, email, password } = req.body;
	findByEmail(email)
	.then(user => {
		if (user) {
			return res.status(400).json({
				error: 'Email already exists'
			});
		}
		create({ fullname, email, password })
		.then(user => {
			return res.json({
				user: pickUser(user)
			});
		})
		.catch(err => {
			throw err;
		});
	})
	.catch(err => {
		throw err;
	});
}

module.exports = createUser;
