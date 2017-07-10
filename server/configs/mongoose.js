const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
const init = process.env.INIT;

mongoose.Promise = global.Promise;
mongoose.connect(uri).then(() => {
	if (!init) {
		console.log('[MONGODB] Connected to mongodb');
	}
}, err => {
	throw err;
});

module.exports = mongoose;
