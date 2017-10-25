const express = require('express');
const app = express();

// First middleware
const myLogger = function(req, res, next) {
	console.log('logged!');
	next();
}

const myLoggerFirst = function(req, res, next) {
	console.log('This goes first');
	next();
}

const requestTime = function(req, res, next) {
	req.requestTime = Date.now();
	next();
}

app.use(myLoggerFirst);
app.use(myLogger);
app.use(requestTime);

app.get('/', function(req, res) {
	var responseText = '<br>Response</br>';
	responseText += ' <small>at ' + req.requestTime + '</small>';
	res.send(responseText);
});

app.listen(8080);