const { rootPrefix } = global;
const express = require('express');
const router = express.Router();
const userCtl = require(`${rootPrefix}/controllers/api/user`);
const adminCtl = require(`${rootPrefix}/controllers/api/admin`);
const validator = require(`${rootPrefix}/middlewares/validator`);
const validations = require(`${rootPrefix}/configs/validations`);
const deserializeUser = require(`${rootPrefix}/middlewares/deserializeUser`);
const deserializeAdmin = require(`${rootPrefix}/middlewares/deserializeAdmin`);

router.route('/user')
	.post(validator(validations.createUser), userCtl.createUser)
	.get(deserializeUser, userCtl.getInformation)
	.put(deserializeUser, deserializeAdmin, userCtl.updateInformation)
	.delete(deserializeAdmin, validator(validations.removeUser), userCtl.removeUser);

router.get('/users', deserializeAdmin, userCtl.getUsers);

router.post('/user/login', validator(validations.login), userCtl.login);

router.get('/user/logout', deserializeUser, userCtl.logout);

router.post('/admin/login', validator(validations.adminLogin), adminCtl.login);

router.post('/admin/logout', deserializeAdmin, adminCtl.logout);

router.route('/admin')
	.get(deserializeAdmin, adminCtl.getInformation);

module.exports = router;
