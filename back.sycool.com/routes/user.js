var express = require('express');
var router = express.Router();
var crypto = require("crypto");
var objectId = require('mongodb').ObjectId;
const {
	insert,
	find,
	updateOne,
	deleteOne
} = require("../lib/db");

router.post('/find', async function(req, res, next) {
	let params = new Object();
	if (req.body.uid.length != 0) {
		params._id = objectId(req.body.uid);
	}
	if (req.body.un.length != 0) {
		params.username = req.body.un;
	}
	console.log(params);
	let results = await find("user", params, 1, 0);
	delete results[0].password;
	res.json(results);
});

router.post('/add', async function(req, res, next) {
	let params = {
		username: req.body.addun,
		password: req.body.pw
	}
	let results = await insert("user", params);
	res.json(results.result);
});

module.exports = router;
