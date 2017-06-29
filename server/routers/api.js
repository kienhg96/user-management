const express = require('express');
const router = express.Router();
const userCtl = require('../controllers/api/user');
const validator = require('../middlewares/validator');
const validations = require('../configs/validations');

router.route('/user')
	.post(validator(validations.createUser), userCtl.createUser)

module.exports = router;
