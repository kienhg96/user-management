const { rootPrefix } = global;
const express = require('express');
const router = express.Router();
const userCtl = require(`${rootPrefix}/controllers/api/user`);
const validator = require(`${rootPrefix}/middlewares/validator`);
const validations = require(`${rootPrefix}/configs/validations`);
const deserializeUser = require(`${rootPrefix}/middlewares/deserializeUser`);

router.route('/user')
	.post(validator(validations.createUser), userCtl.createUser)
	.get(deserializeUser, userCtl.getInformation)

router.post('/user/login', validator(validations.login), userCtl.login);

module.exports = router;
