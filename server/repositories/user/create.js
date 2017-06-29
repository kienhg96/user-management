const User = require('../../models/User');

const create = ({fullname, email, password}) => 
new Promise((resolve, reject) => {
	const user = new User({
		fullname,
		email,
		password
	});
	user.save(err => {
		if (err) {
			return reject(err);
		}
		return resolve(user);
	});
});

module.exports = create;
