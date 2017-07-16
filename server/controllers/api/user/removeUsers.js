const { rootPrefix } = global;
const { removeById } = require(`${rootPrefix}/repositories/user`);

const removeUsers = (req, res) => {
	const { ids } = req.body; // Array
	if (!req.admin) {
		return res.status(400).json({
			error: 'Not login yet'
		});
	}
	const { length } = ids;
	let count = 0;
	const deletedIds = [];
	const done = () => {
		count++;
		if (count === length) {
			res.json({ deletedIds });
		}
	};

	ids.forEach(id => {
		removeById(id)
		.then(() => {
			deletedIds.push(id);
			done();
		})
		.catch(err => {
			done();
			console.error(err);
		})
	});
}

module.exports = removeUsers;
