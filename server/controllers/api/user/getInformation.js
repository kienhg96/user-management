const { rootPrefix } = global;
const pickUser = require(`${rootPrefix}/utils/pickUser`);

const getInformation = (req, res) => {
	if (!req.user) {
		return res.json({
			user: null
		});
	}
	return res.json({
		user: pickUser(req.user)
	});
}

module.exports = getInformation;
