'use strict';

var express = require('express');

var app = express();
app.use(express.static('public'));
app.get('/', function (req, res) {
	res.sendFile('C:\\Users\\NicLaptop\\Desktop\\Web Development\\v2 Portfolio Website\\Profile-Website-version2\\Portfolio Website v2.html');
});



app.listen(3000, function () {
	console.log('Listening on port 3000...');
});