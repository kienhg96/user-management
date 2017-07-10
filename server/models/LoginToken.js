const { rootPrefix } = global;
const redis = require(`${rootPrefix}/configs/redis`);
const prefix = 'login';

class LoginToken {
	constructor(props) {
		this._id = props._id;
		this.token = props.token;
	}

	save() {
		return new Promise((resolve, reject) => {
			let key = `${prefix}:main:${this._id}`;
			redis.set(key, this.token, err => {
				if (err) {
					return reject(err);
				}
				key = `${prefix}:indexByToken:${this.token}`;
				redis.set(key, this._id.toString(), err => {
					if (err) {
						return reject(err);
					}
					return resolve(this);
				});
			});
		});
	}

	static find(query) {
		return new Promise((resolve, reject) => {
			if (query._id) {
				// find by id
				let key = `${prefix}:main:${query._id}`;
				redis.get(key, (err, token) => {
					if (err) {
						return reject(err);
					}
					if (!token) {
						return resolve(null);
					}
					return resolve(new LoginToken({
						_id: query._id,
						token
					}));
				});
			} else if (query.token) {
				// find by token
				let key = `${prefix}:indexByToken:${query.token}`;
				redis.get(key, (err, _id) => {
					if (err) {
						return reject(err);
					}
					if (!_id) {
						return resolve(null);
					}
					return resolve(new LoginToken({
						_id,
						token: query.token
					}));
				});
			} else {
				reject(new Error("Invalid query"));
			}
		});
	}

	remove() {
		return new Promise((resolve, reject) => {
			let key = `${prefix}:main:${this._id}`;
			redis.del(key, err => {
				if (err) {
					return reject(err)
				}
				key = `${prefix}:indexByToken:${this.token}`;
				redis.del(key, err => {
					if (err) {
						return reject(err);
					}
					return resolve(this);
				});
			});
		});
	}
}

module.exports = LoginToken;
