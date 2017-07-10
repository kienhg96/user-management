const { rootPrefix } = global;
const pickUser = require(`${rootPrefix}/utils/pickUser`);
const hash = require(`${rootPrefix}/utils/hash`);
const { findById } = require(`${rootPrefix}/repositories/user`);
const { isObjectId } = require(`${rootPrefix}/utils/checkTypes`);

const update = (user, fullname, hashPassword, callback) => {
	if (fullname) {
		user.fullname = fullname;
	}
	if (hashPassword) {
		user.password = hashPassword;
	}
	user.save(err => {
		if (err) throw err;
		return callback();
	});
}

const updateInformation = (req, res) => {
	const { fullname, password, id } = req.body;
	const { user, admin } = req;
	if (!user && !admin) {
		return res.status(400).json({
			error: 'Not login'
		});
	}
	hash(password)
	.then(hashPassword => {
		if (user) {
			// User update
			update(user, fullname, hashPassword, () => {
				return res.json({
					user: pickUser(user)
				});
			})
		} else {
			// Admin update
			if (!isObjectId(id)) {
				return res.status(400).json({
					error: 'Invalid id'
				});
			}
			findById(id)
			.then(user => {
				if (!user) {
					return res.status(400).json({
						error: 'Invalid user'
					});
				}
				update(user, fullname, hashPassword, () => {
					return res.json({
						user: pickUser(user)
					});
				})
			})
			.catch(err => {
				throw err;
			});
		}
	})
	.catch(err => {
		throw err;
	});
}

module.exports = updateInformation;
