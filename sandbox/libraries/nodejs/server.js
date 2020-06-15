const http = require('http');

const requestLisenter = (req, res) => {
	console.dir(req, { depth: 0 });
	res.end('Hello Node!\n');
};

const server = http.createServer();
server.on('request', requestLisenter);

server.listen(4242, () => {
	console.log('Server is running...');
});