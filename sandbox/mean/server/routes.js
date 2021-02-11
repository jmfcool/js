var express = require('express');
var database = require('./data/data');


module.exports = function(app)
{
	app.get('/example', function(req, res)
	{
		res.send('Example Route!');
	});

	var router = express.Router();

	router.use(function(req, res, next)
	{
		console.log(req.method, req.url);
		next();	
	});

	app.use('/', router);

	app.route('/insert').post(function(req, res)
	{
		if(req.headers.origin.match(/localhost/) || req.headers.origin.match(/jeremiahfaria\.com/))
		{
			res.header("Access-Control-Allow-Origin", req.headers.origin);
		}
		res.header("Access-Control-Allow-Methods", "GET, POST");

		database.insert(req.body.data, function (err, data)
		{
			(err) ? res.end("Record not saved!") : res.end("Record saved!");
		});
	});

	app.route('/update').post(function(req, res)
	{
		if(req.headers.origin.match(/localhost/) || req.headers.origin.match(/jeremiahfaria\.com/))
		{
			res.header("Access-Control-Allow-Origin", req.headers.origin);
		}
		res.header("Access-Control-Allow-Methods", "GET, POST");

		database.update(req.query.id, req.body.data, function (err, data)
		{
			(err) ? res.end("Record not updated!") : res.end("Record updated!");
		});
	});

	app.route('/fetch').get(function(req, res)
	{
		if (req.headers.origin.match(/localhost/) || req.headers.origin.match(/jeremiahfaria\.com/))
		{
			res.header("Access-Control-Allow-Origin", req.headers.origin);
		}
		res.header("Access-Control-Allow-Methods", "GET, POST");

		database.fetch(function (err, record)
		{
			var json = JSON.parse(record);

			if (err)
			{
				res.send(HTTPStatus.INTERNAL_SERVER_ERROR,'Internal Server Error');
			}

			if(json.length>0)
			{
				res.writeHead(200, { 'Content-Type': 'application/json' });
				res.end(json);
			}
			else
			{
				res.end('No record found');
			}
		});
	});

	app.route('/find').get(function(req, res)
	{
		if(req.headers.origin.match(/localhost/) || req.headers.origin.match(/jeremiahfaria\.com/))
		{
			res.header("Access-Control-Allow-Origin", req.headers.origin);
		}
		res.header("Access-Control-Allow-Methods", "GET, POST");

		if (req.query.id !== 'undefined')
		{
			database.find(req.query.id, function(err, record)
			{
				var json = JSON.parse(record);

				if (err)
				{
					res.send(HTTPStatus.INTERNAL_SERVER_ERROR,'Internal Server Error');
				}

				if(json.length>0)
				{
					res.writeHead(200, { 'Content-Type': 'application/json' });
					res.end(json);
				}
				else
				{
					res.end('No record found');
				}
			});
		}
		else
		{
			return false;
		}
	});
};



