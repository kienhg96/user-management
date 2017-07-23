const { rootPrefix } = global;
const mongoose = require(`${rootPrefix}/configs/mongoose`);
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
	password: String,
	fbId: String
});

UserSchema.index({
	fullname: 'text',
	email: 'text'
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
