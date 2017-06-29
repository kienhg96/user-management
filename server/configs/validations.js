const v = (param, type, message) => ({ param, type, message });
const isObjectId = str => /^[0-9a-fA-F]{24}$/.test(str);
