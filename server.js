const express = require('express');
const app = express();
const port = 3000;

var splittedClientPath = __dirname.split('\\');
splittedClientPath.pop();
const clientPath = splittedClientPath.join('\\');

app.get('/', (request, response) => {
  	response.sendFile(clientPath + '/server-online-shop/ind.html');
});

app.get('/products', (request, response) => {
  	response.send([{
  		id: 1
  	}, {
  		id: 2
  	}]);
});

app.get('/error', (request, response) => {
  	response.status(500).send('Error');
});

app.listen(port, (err) => {
  	if (err) {
    	return console.log('something bad happened', err)
  	}

  	console.log(`server is listening on http://localhost:${port}`)
});