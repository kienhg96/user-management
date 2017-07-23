global.rootPrefix = process.cwd();
require('dotenv').load();
process.env.INIT = true;
const readline = require('../utils/readline');
const fs = require('fs');
const path = require('path');
const { rootPrefix } = global;

let mongo_uri = '';
let port = '';
let redis_url = '';
let redis_db = '';

readline('MONGO_URI (Example: mongodb://127.0.0.1/usermanagement): ')
.then(text => {
	mongo_uri = text;
	return readline('REDIS_URL (Example: redis://127.0.0.1:6379): ');
})
.then(text => {
	redis_url = text;
	return readline('PORT (Example: 8080): ');
})
.then(text => {
	port = text;
	return readline('REDIS_DB (Example: 4): ');
})
.then(text => {
	redis_db = text;
})
.then(() => {
	if (!mongo_uri) {
		mongo_uri = 'mongodb://127.0.0.1/usermanagement';
	}
	if (!port) {
		port = 8080;
	}
	if (!redis_url) {
		redis_url = 'redis://127.0.0.1:6379';
	}
	if (!redis_db) {
		redis_db = 4;
	}
	const stream = fs.createWriteStream(path.join(rootPrefix, '.env'));
	stream.once('open', () => {
		stream.write(`MONGO_URI=${mongo_uri}\n`);
		stream.write(`PORT=${port}\n`);
		stream.write(`REDIS_URL=${redis_url}\n`);
		stream.write(`REDIS_DB=${redis_db}\n`);
		stream.end();
	});
})
.catch(console.error);
