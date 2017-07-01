const v = (param, type, message) => ({ param, type, message });

exports.createUser = [
	v('email', 'email', 'Missing or invalid email'),
	v('fullname', 'string', 'Missing fullname'),
	v('password', 'string', 'Missing password')
];

exports.login = [
	v('email', 'email', 'Missing or invalid email'),
	v('password', 'string', 'Missing password')
];
