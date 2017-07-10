exports.isNumber = number => !isNaN(number);
exports.isString = str => typeof str === 'string';
exports.isArray = arr => Array.isArray(arr);
exports.isObjectId = str => /^[0-9a-fA-F]{24}$/.test(str);
exports.isEmail = str => /.@./.test(str);
