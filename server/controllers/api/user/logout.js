const { rootPrefix } = global;

const logout = (req, res) => {
	if (req.user) {
		req.logout();
		return res.json({
			message: 'Logged out'
		});
	}
	return res.status(400).json({
		message: 'Not login yet'
	});
}

module.exports = logout;
