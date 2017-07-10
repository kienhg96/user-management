const { rootPrefix } = global;
const pickAdmin = require(`${rootPrefix}/utils/pickAdmin`);

const getInformation = (req, res) => {
	if (!req.admin) {
		return res.json({
			admin: null
		});
	}
	return res.json({
		admin: pickAdmin(req.admin)
	});
}

module.exports = getInformation;
