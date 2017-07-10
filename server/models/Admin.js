const { rootPrefix } = global;
const mongoose = require(`${rootPrefix}/configs/mongoose`);
const { Schema } = mongoose;

const AdminSchema = Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	}
});

const Admin = mongoose.model('Admin', AdminSchema);
module.exports = Admin;
