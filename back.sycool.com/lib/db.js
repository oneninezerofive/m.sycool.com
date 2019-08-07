const MongoClient = require('mongodb').MongoClient;
// 踊跃测试
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'sycool';
const connect = () => {
	return new Promise((resolve, reject) => {
		MongoClient.connect(url, {
			useNewUrlParser: true
		}, function(err, client) {
			if (err != null) {
				reject(err);
				throw err;
			} else {
				resolve(client);
			}
		});
	});
}

// insert documents
const insert = async (col, params) => {
	return new Promise(async (resolve, reject) => {
		let client = await connect();
		const db = client.db(dbName);
		const collection = db.collection(col);
		collection.insertOne(params, {}, (err, res) => {
			if (err) {
				reject(err);
			} else {
				console.log("Inserted documents into the collection.");
				resolve(res);
			}
			client.close();
		});
	});
}

// find documents
const find = async (col, params, limit, skip) => {
	return new Promise(async (resolve, reject) => {
		let client = await connect();
		const db = client.db(dbName);
		const collection = db.collection(col);
		skip = Number(skip);
		collection.find(params).skip(skip).limit(limit).toArray((err, docs) => {
			if (err) {
				reject(err);
			} else {
				resolve(docs);
			}
			client.close();
		});
	});
}

// updateOne documents
const updateOne = async (col, filter, params, ops) => {
	return new Promise(async (resolve, reject) => {
		let client = await connect();
		const db = client.db(dbName);
		const collection = db.collection(col);
		collection.updateOne(filter, params, ops, (err, res) => {
			if (err) {
				reject(err);
			} else {
				resolve(res);
			}
			client.close();
		});
	});
}

// deleteOne documents
const deleteOne = async (col, filter, ops) => {
	return new Promise(async (resolve, reject) => {
		let client = await connect();
		const db = client.db(dbName);
		const collection = db.collection(col);
		collection.deleteOne(filter, ops, (err, res) => {
			if (err) {
				reject(err);
			} else {
				resolve(res);
			}
			client.close();
		});
	});
}

module.exports = {
	insert,
	find,
	updateOne,
	deleteOne
}
