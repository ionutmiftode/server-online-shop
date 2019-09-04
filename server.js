const express = require('express');
const app = express();
const port = 3000;

var splittedClientPath = __dirname.split('\\');
splittedClientPath.pop();
const clientPath = splittedClientPath.join('\\');

app.get('/', (request, response) => {
    response.sendFile(clientPath + '/html/index.html');
});

app.get('/productsPage.html', (request, response) => {
    response.sendFile(clientPath + '/html/productsPage.html');
});

app.get('/bag.html', (request, response) => {
    response.sendFile(clientPath + '/html/bag.html');
});

app.get('/css/style.css', (request, response) => {
    response.sendFile(clientPath + '/css/style.css');
});

app.get('/images/spinner.gif', (request, response) => {
    response.sendFile(clientPath + '/images/spinner.gif');
});

app.get('/js/common.js', (request, response) => {
    response.sendFile(clientPath + '/js/common.js');
});

/*app.get('/js/products.js', (request, response) => {
    response.sendFile(clientPath + '/js/products.js');
});*/

app.get('/js/renderProduct.js', (request, response) => {
    response.sendFile(clientPath + '/js/renderProduct.js');
});

app.get('/js/productsPage.js', (request, response) => {
    response.sendFile(clientPath + '/js/productsPage.js');
});

app.get('/js/bag.js', (request, response) => {
    response.sendFile(clientPath + '/js/bag.js');
});

app.get('/js/bagPage.js', (request, response) => {
    response.sendFile(clientPath + '/js/bagPage.js');
});

app.get('/js/slider.js', (request, response) => {
    response.sendFile(clientPath + '/js/slider.js');
});

app.get('/js/script.js', (request, response) => {
    response.sendFile(clientPath + '/js/script.js');
});

app.get('/fonts/Dosis-ExtraLight.ttf', (request, response) => {
    response.sendFile(clientPath + '/fonts/Dosis-ExtraLight.ttf');
});

app.get('/products', (request, response) => {
  	response.send([
        { id: 0, brand: "Samsung", name: "Samsung Galaxy S8", price: 3399, category: "phone", popular:true },
        { id: 1, brand: "Samsung", name: "Samsung Galaxy S7", price: 1999, category: "phone" },
        { id: 2, brand: "Samsung", name: "Samsung Galaxy A5", price: 1299, category: "phone" },
        { id: 3, brand: "Huawei", name: "Huawei P10 Lite", price: 949, category: "phone" },
        { id: 4, brand: "Huawei", name: "Huawei Y6", price: 599, category: "phone" },
        { id: 5, brand: "Huawei", name: "Huawei Mate 9", price: 2899, category: "phone" },
        { id: 6, brand: "Apple", name: "Apple iPhone 7", price: 2999, category: "phone" },
        { id: 7, brand: "Apple", name: "Apple iPhone SE", price: 1499, category: "phone" },
        { id: 8, brand: "Apple", name: "Apple iPhone 8 Plus", price: 4849, category: "phone", popular:true },
        { id: 9, brand: "Sony", name: "Sony XZ Premium", price: 3099, category: "phone" },
        { id: 10, brand: "Sony", name: "Sony Xperia X", price: 1356, category: "phone" },
        { id: 11, brand: "Sony", name: "Sony Xperia Z3", price: 1399, category: "phone" },
        { id: 12, brand: "Xiaomi", name: "Xiaomi Redmi Note 4X", price: 849, category: "phone" },
        { id: 13, brand: "Xiaomi", name: "Xiaomi Mi Mix", price: 2859, category: "phone" },
        { id: 14, brand: "Xiaomi", name: "Xiaomi Mi 5s Plus", price: 1696, category: "phone" },
    ]);
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