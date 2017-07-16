const pick = ({ _id, fullname, email }) => ({
	_id, fullname, email
});


module.exports = user => user ? pick(user) : null;
