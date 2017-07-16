const { rootPrefix } = global;
const { findById } = require(`${rootPrefix}/repositories/user`);
const pickUser = require(`${rootPrefix}/utils/pickUser`);
const { isObjectId } = require(`${rootPrefix}/utils/checkTypes`);

const getInformation = (req, res) => {
	if (!req.user && !req.admin) {
		return res.status(400).json({
			error: 'Not login'
		});
	}

	if (req.user) {
		return res.json({
			user: pickUser(req.user)
		});
	}

	const { id } = req.query;
	if (!id || !isObjectId(id)) {
		return res.status(400).json({
			error: "Missing or Invalid id"
		});
	}
	
	findById(id)
	.then(user => {
		return res.json({
			user: pickUser(user)
		});
	})
	.catch(err => {
		console.error(err);
	})
}

module.exports = getInformation;
