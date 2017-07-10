const readline = require('readline');

const hidden = (query, callback) => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	const stdin = process.openStdin();
	process.stdin.on("data", function(char) {
		char = char + "";
		switch (char) {
			case "\n":
			case "\r":
			case "\u0004":
				stdin.pause();
				break;
			default:
				process.stdout.write("\033[2K\033[200D" + query + Array(rl.line.length+1).join("*"));
				break;
		}
	});

	rl.question(query, function(value) {
		rl.close()
		callback(value);
	});
}

const show = (query, callback) => {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.question(query, function(value) {
		rl.close()
		callback(value);
	});
}

module.exports = (query, secure = false) => new Promise(resolve => {
	if (secure) {
		hidden(query, value => {
			resolve(value);
		});
	} else {
		show(query, value => {
			resolve(value);
		});
	}
});
