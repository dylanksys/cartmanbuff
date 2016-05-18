var express = require ('express');

var cartman = require('../routers/cartman');
var api = require('../routers/api');

var app = express();

app.use('/', cartman);
app.use('/', api);

app.listen(9000, function () {
	console.log('cartman listening on port 9000');
};
