// function (exports, module, require, __filename, __dirname) {
	
	// let g = 1 // this isn't a global variable. node wraps everything in a function.

	// console.log(arguments);

	//exports.a = 42; // exports is an alias for module.exports.
	//module.exports.b = 37;

	// exports = () => {} // This isn't ok. Will not work.

/*
	module.exports = () => {
		console.log('This is a function!')
	}
*/

	// API can be objects
	exports.language = 'English';

	exports.direction = 'RTL';

	exports.encoding = 'UTF-8'

	// API can be an array
	module.exports = [1,2,3,4];

	// API can be a String
	module.exports = title => `
	<html>
		<head>
			<title>${title}</title>
		</head>
		<body>
			<h1>This is a String</h1>
		</body>
	</html>`;

	// return module.exports;
//}