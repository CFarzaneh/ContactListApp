var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactlist', function (req, res) {
	console.log("I received a GET request")

	person1 = {
		name: 'Tim',
		email: 'tim@email.com',
		number: '1111111111'
	};
	person2 = {
		name: 'Rob',
		email: 'rob@email.com',
		number: '3331414141'
	};
	person3 = {
		name: 'Juan',
		email: 'Juan@email.com',
		number: '1312323123'
	};

	var contactlist = [person1, person2, person3];
	res.json(contactlist);
});

app.listen(3000);
console.log("Server running on port 3000");