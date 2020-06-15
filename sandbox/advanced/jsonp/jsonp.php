<?php header('Content-type: text/javascript'); ?>
// Json
var Model = {
	get: function (id) 
	{
		return this.data[id];
	},
	del: function (id) 
	{
		delete this.data[id];
	},
	data:
	{
		'1':
		{
			'name': 'x',
			'value': '5'
		},
		'2':
		{
			'name': 'y',
			'value': '10'
		},
		'3':
		{
			'name': 'z',
			'value': '15'
		}
	}
}

// Builds Params
/*
var scripts	= document.getElementsByTagName('script');
var script 	= scripts[scripts.length - 1];
var query 	= script.src.replace(/^[^\?]+\??/,'');
var get 	= parse(query);
function parse(query)
{
	var params = {};
	if (!query) return params; // return empty object
	var pairs = query.split(/[;&]/);
	for (var i=0; i<pairs.length; i++) 
	{
		var kv = pairs[i].split('=');
		if (!kv || kv.length != 2) continue;
		var k = unescape(kv[0]);
		var v = unescape(kv[1]);
			v = v.replace(/\+/g,' ');
		params[k] = v;
	}
	return params;
}
*/


// Json-p Callback
function req()
{
	//var res = get.jsonp + '(' + Model + ')'; // Generated Client Side
	var res = <?php print $_GET['jsonp'] ?>(Model); // Generated Server Side
	return res;
}
req.call();