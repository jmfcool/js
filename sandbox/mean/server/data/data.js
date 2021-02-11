var config = require('./config');
var mongodburl = process.env.MONGODB_URL ;
var collections = ["records"];

var mongojs = require('mongojs');
var ObjectId = mongojs.ObjectId;
var db = mongojs(mongodburl);
var records = db.collection('records');

function insert(data, cb)
{
	var json = JSON.parse(data);
	records.save(json, function(err, saved)
	{
		if(err || !saved)
		{
			return cb(err,'Internal Server Error');
		}
  		else
		{
			return cb(null,JSON.stringify(saved));
		}
	});
}

function update(id, data, cb)
{
	var json = JSON.parse(data);

	delete json._id;

	records.update({ _id: ObjectId(id) }, { $set: json }, function(err, updated)
	{
		if (err || !updated)
		{
			console.log("User not updated!");
		}
		else
		{
			console.log("User updated!");
			console.log(updated);
			return cb(null,JSON.stringify(updated));
		}
	});
}

function fetch(cb)
{
	records.find(function(err, records)
	{
		if (err || !records)
	   	{
	   		return cb(err,'Internal Server Error');
		}
		else
		{
			if (records == '')
			{
				return cb(null,JSON.stringify("[]"));
			}
			str = '[';
			str = JSON.stringify(records);
			str = str.trim();
			str = str.substring(0,str.length-1);
			str = str + ']';
			return cb(null,JSON.stringify(str));
		}
	});
}

function find(id, cb)
{
	records.find({ _id: ObjectId(id) }, function(err, record)
	{
		if(err || !record)
		{
			return cb(err,'Internal Server Error');
		}
		else
		{
			if (record == '')
			{
				return cb(null,JSON.stringify("[]"));
			}
        	return cb(null,JSON.stringify(JSON.stringify(record)));
		}
	});
}

module.exports.insert = insert;
module.exports.update = update;
module.exports.fetch = fetch;
module.exports.find = find;
