const { rootPrefix } = global;
const { removeById } = require(`${rootPrefix}/repositories/user`);

const removeUser = (req, res) => {
	const { id } = req.body;
	if (!req.admin) {
		return res.status(400).json({
			error: 'Not login yet'
		});
	}
	removeById(id)
	.then(() => {
		res.json({
			message: 'OK'
		});
	})
	.catch(err => {
		console.error(err);				
	})
}

module.exports = removeUser;
