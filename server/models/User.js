const mongoose = require('../configs/mongoose');
const { Schema } = mongoose;

const UserSchema = Schema({
	fullname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
