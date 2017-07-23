const https = require('https');

const fbGraphRequest = fbToken => new Promise((resolve, reject) => {
	const options = {
		hostname: 'graph.facebook.com',
		port: 443,
		path: `/me?fields=id,email,name&access_token=${fbToken}`
	}
	const req = https.request(options, res => {
		let body = [];
		res.on('data', chunk => {
			body.push(chunk);
		}).on('end', function() {
			body = Buffer.concat(body).toString();
			try {
				body = JSON.parse(body);
				return resolve(body);
			} catch (e) {
				return reject(e);
			}
		});
	});
	req.on('error', (e) => {
		return reject(e);
	});
	req.end();
});

module.exports = fbGraphRequest;
