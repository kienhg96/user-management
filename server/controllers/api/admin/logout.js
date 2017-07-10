const logout = (req, res) => {
	if (req.admin) {
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
