const { rootPrefix } = global;
const { fullTextSearch } = require(`${rootPrefix}/repositories/user`);
const pickUser = require(`${rootPrefix}/utils/pickUser`);

const search = (req, res) => {
	let { page, limit, query } = req.query;
	if (!req.admin) {
		return res.status(400).json({
			error: 'Not login yet'
		});
	}
	if (isNaN(page)) {
		page = 0;
	} else {
		page = parseInt(page, 10);
	}
	if (isNaN(limit)) {
		limit = 15;
	} else {
		limit = parseInt(limit, 10);
	}

	fullTextSearch(query, page, limit)
	.then(users => {
		res.json({
			users: users.map(u => pickUser(u))
		})
	})
	.catch(err => {
		console.error(err);
	})
}

module.exports = search;
