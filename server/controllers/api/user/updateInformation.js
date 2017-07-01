const { rootPrefix } = global;
const pickUser = require(`${rootPrefix}/utils/pickUser`);
const hash = require(`${rootPrefix}/utils/hash`);

const updateInformation = (req, res) => {
	const { fullname, password } = req.body;
	const { user } = req;
	if (!user) {
		return res.status(400).json({
			error: 'Not login'
		});
	}
	hash(password)
	.then(hashPassword => {
		if (fullname) {
			user.fullname = fullname;
		}
		if (hashPassword) {
			user.password = hashPassword;
		}
		user.save(err => {
			if (err) throw err;
			return res.json({
				user: pickUser(user)
			});
		});

	})
	.catch(err => {
		throw err;
	});
}

module.exports = updateInformation;
