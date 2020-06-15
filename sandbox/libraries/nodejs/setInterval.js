let counter = 0;

const stopInterval = setInterval(() => {
	
	console.log('Hello World');
	
	counter += 1;

	if(counter == 5) {
		console.log("Done")
		clearInterval(stopInterval);
	}

}, 1000);