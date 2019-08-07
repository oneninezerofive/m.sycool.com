var express = require('express');
var router = express.Router();
const {
	insert,
	find,
	updateOne,
	deleteOne
} = require("../lib/db");

/* GET home page data */
router.get('/floors', async function(req, res, next) {
	let results = await find("home",{},1,0);
	res.send(results);
});

module.exports = router;
