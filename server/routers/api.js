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
	.get(deserializeUser, deserializeAdmin, userCtl.getInformation)
	.put(deserializeUser, deserializeAdmin, userCtl.updateInformation)
	.delete(deserializeAdmin, validator(validations.removeUser), userCtl.removeUser);

router.route('/users')
	.get(deserializeAdmin, userCtl.getUsers)
	.delete(deserializeAdmin, userCtl.removeUsers);
router.get('/users/count', deserializeAdmin, userCtl.countUser);

router.get('/user/search', deserializeAdmin, validator(validations.search, 'query'), userCtl.search);
router.post('/user/login', validator(validations.login), userCtl.login);
router.get('/user/logout', deserializeUser, userCtl.logout);
router.post('/user/fbLogin', validator(validations.fbLogin), userCtl.fbLogin);
router.post('/admin/login', validator(validations.adminLogin), adminCtl.login);
router.get('/admin/logout', deserializeAdmin, adminCtl.logout);

router.route('/admin')
	.get(deserializeAdmin, adminCtl.getInformation);

module.exports = router;
