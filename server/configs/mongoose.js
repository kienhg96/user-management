const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;
mongoose.Promise = global.Promise;
mongoose.connect(uri).then(() => {
	console.log('Connected successfully to mongodb');
}, err => {
	throw err;
});

module.exports = mongoose;
