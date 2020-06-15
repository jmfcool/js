const theOneFunc = time => {
	console.log('Hello after ' + time + ' seconds')	
};

setTimeout(theOneFunc, 4 * 1000, '4');

setTimeout(theOneFunc, 8 * 1000, '8');