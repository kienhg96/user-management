const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
mongoose.connect(uri).then(() => {
	console.log('[MONGODB] Connected to mongodb');
}, err => {
	throw err;
});

module.exports = mongoose;
