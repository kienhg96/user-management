const { rootPrefix } = global;
const User = require(`${rootPrefix}/models/User`);

const create = ({ fullname, email, password, fbId }) => 
new Promise((resolve, reject) => {
	const user = new User({
		fullname,
		email,
		password,
		fbId
	});
	user.save(err => {
		if (err) {
			return reject(err);
		}
		return resolve(user);
	});
});

module.exports = create;
