var express = require('express');
var objectId = require('mongodb').ObjectId;
var router = express.Router();
const {
	insert,
	find,
	updateOne,
	deleteOne
} = require("../lib/db");

// 获取用户订单
router.get('/', async function(req, res, next) {
	let uid = req.query.uid;
	let results = await find("order", {
		uid: uid
	}, 100, 0);
	res.send(results);
});

// 添加订单
router.post('/addorder', async function(req, res, next) {
	let {
		uid,
		gid,
		username,
		number
	} = req.body;
	let resforgoods = await find("goods", {
		_id: objectId(gid)
	}, 1, 0);
	console.log(resforgoods[0]);
	let {
		imgSrc,
		gName,
		currentPrice
	} = resforgoods[0];
	let results = await insert("order", {
		uid,
		gid,
		username,
		gName,
		number,
		imgSrc,
		currentPrice
	});
	res.send(results);
});

// 修改数量
router.get('/update', async function(req, res, next) {
	let oid = req.query.oid;
	let number = req.query.number;
	let results = await updateOne("order", {
		_id: objectId(oid)
	}, {
		$set: {
			number: number
		}
	}, {});
	res.send(results);
});

// 删除订单
router.get('/del', async function(req, res, next) {
	let oid = req.query.oid;
	let results = await deleteOne("order", {
		_id: objectId(oid)
	}, {});
	res.send(results);
});

module.exports = router;
