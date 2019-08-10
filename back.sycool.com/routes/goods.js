var express = require('express');
var objectId = require('mongodb').ObjectId;
var router = express.Router();
const {
	insert,
	find,
	updateOne,
	deleteOne
} = require("../lib/db");

// 猜你喜欢
router.get('/random', async function(req, res, next) {
	let l = Number(req.query.limit);
	let skip = Math.floor(Math.random() * (2399 - l));
	let results = await find("goods", {}, l, skip);
	res.send(results);
});

let limit = 10;

// 品牌
router.get('/brand', async function(req, res, next) {
	let params = new Object();
	params["gName"] = new RegExp(req.query.gName);
	let skip = Number(req.query.skip) * limit;
	let results = await find("goods", {
		"gName": params["gName"]
	}, limit, skip);
	res.send(results);
});

// 分类
router.get('/type', async function(req, res, next) {
	let skip = Number(req.query.skip) * limit;
	let params = new Object();
	params["type"] = new RegExp(req.query.type);
	let results = await find("goods", {
		"type": params["type"]
	}, limit, skip);
	res.send(results);
});

// 搜索
router.get('/search', async function(req, res, next) {
	let params = new Object();
	params.gName = new RegExp(req.query.value);
	let skip = Number(req.query.skip) * limit;
	let results = await find("goods", {
		"gName": params.gName
	}, limit, skip);
	res.send(results);
});

// 指定商品
router.get('/detail', async function(req, res, next) {
	let _id = objectId(req.query.id);
	let params = {
		_id: _id
	};
	let results = await find("goods", params, 1, 0);
	res.send(results);
});

/* 后台管理系统的接口 */

// 查询商品
router.get('/adminfind', async function(req, res, next) {
	let params = new Object();
	if (req.query._id != '') {
		params._id = objectId(req.query._id);
	}
	if (req.query.gName != '') {
		params.gName = new RegExp(req.query.gName);
	}
	if (req.query.type != '') {
		params.type = new RegExp(req.query.type);
	}
	let skip = (req.query.skip - 1) * limit;
	console.log(params, req.query, limit, skip);
	let results = await find("goods", params, limit, skip);
	for (let i of results) {
		i.imgSrc = i.imgSrc[0];
	}
	res.send(results);
});

router.post('/adminadd', async function(req, res, next) {
	let params = {
		username: req.body.addun,
		password: req.body.pw
	}
	let results = await insert("user", params);
	res.json(results.result);
});

module.exports = router;
