const { rootPrefix } = global;
const User = require(`${rootPrefix}/models/User`);

const fullTextSearch = (query, page, limit) => new Promise((resolve, reject) => {
	User.find({ $text: { $search: query }}, { score: { $meta: "textScore" }})
	.sort({score:{$meta:"textScore"}})
	// .skip(page * limit)
	// .limit(limit)
	.exec((err, users) => {
		if (err) {
			return reject(err);
		}
		return resolve(users);
	});
});

module.exports = fullTextSearch;
