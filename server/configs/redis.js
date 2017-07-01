const redis = require("redis");
const url = process.env.REDIS_URL || "redis://127.0.0.1:6379";
const redisDB = process.env.REDIS_DB || 0;
const client = redis.createClient({ url });

client.on("error", function (err) {
    console.log("[REDIS] Error " + err);
});

client.on('connect', (connect) => {
	console.log('[REDIS] Connected to redis');
	client.select(redisDB, () => {
		console.log(`[REDIS] Use redis db${redisDB}`);
	});
});


module.exports = client;
