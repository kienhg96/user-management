const { rootPrefix } = global;
const { count } = require(`${rootPrefix}/repositories/user`);

const countUser = (req, res) => {
	if (!req.admin) {
		return res.status(400).json({
			error: 'Not login yet'
		});
	}
	count()
	.then(userCount => {
		return res.json({
			count: userCount
		})
	})
	.catch(err => {
		console.error(err);
	});
}

module.exports = countUser;
