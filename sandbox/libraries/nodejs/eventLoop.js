console.log('Who needs the event loop');

setInterval(() => { 
	console.log('Hello event loop!');
}, 5000);