const { rootPrefix } = global;
const { create, findByEmail } = require(`${rootPrefix}/repositories/user`);
const pickUser = require(`${rootPrefix}/utils/pickUser`);
const hash = require(`${rootPrefix}/utils/hash`);

const createUser = (req, res) => {
	const { fullname, email, password } = req.body;
	findByEmail(email)
	.then(user => {
		if (user) {
			return res.status(400).json({
				error: 'Email already exists'
			});
		}
		hash(password)
		.then(hashPassword => create({
			fullname, email, 
			password: hashPassword
		}))
		.then(user => {
			return res.json({
				user: pickUser(user)
			});
		})
		.catch(err => {
			console.error(err);
		});
	})
	.catch(err => {
		console.error(err);
	});
}

module.exports = createUser;
