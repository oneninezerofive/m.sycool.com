var express = require('express');
var router = express.Router();
const {
	insert,
	find,
	updateOne,
	deleteOne
} = require("../lib/db");

/* GET home page data */
router.get('/list', async function(req, res, next) {
	let results = await find("categorys",{},1,0);
	res.send(results);
});

module.exports = router;