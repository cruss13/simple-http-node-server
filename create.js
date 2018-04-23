const http = require('http');
const port = 3000;
const fs = require('fs');

const requestHandler = (request, response) => {
  if (response) {
    response.end('Handling request on report ${port}.')
  };
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return console.log('You have an error: ${err}');
	}
	console.log('server is listening on ${port}');
});

requestHandler(fs.writeFileSync('hello-world.txt', 'Hello to this great world',
'utf8',));
