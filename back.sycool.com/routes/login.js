var express = require('express');
var router = express.Router();
var crypto = require("crypto");
const {
	insert,
	find,
	updateOne,
	deleteOne
} = require("../lib/db");

const {
	createToken,
	decodeToken
} = require('../lib/token');

router.post('/', async function(req, res, next) {
	let {
		username,
		password,
	} = req.body;
	let results = await find("user", {
		username: username,
		password: password
	}, 1, 0);
	if (results.length != 0) {
		let token = createToken({
			username: results[0].username,
			uid: results[0]._id
		}, 300)
		res.json({
			status: true,
			token: token,
			username: username,
			uid: results[0]._id
		});
	}
});

router.post('/check', async function(req, res, next) {
	let token = req.body.token;
	let detail = decodeToken(token);
	res.json({
		detail
	})
});

router.post('/admin', async function(req, res, next) {
	let {
		admin,
		password,
	} = req.body;
	let results = await find("administrator", {
		admin: admin,
		password: password
	}, 1, 0);
	if(results.length != 0) {
		res.json({
			status: true,
			admin: results[0].admin
		})
	} else {
		res.json({
			status: false
		})
	}
})

module.exports = router;