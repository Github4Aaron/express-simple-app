'use strict';

var express = require('express'),
	  posts = require('./mock/posts.json');

var app = express();
//middleware is the logic in the "middle" time between a request made by a client but before it arrives at a route.
// Express static method.  One of few places we access the express module directly, instead of teh app variable.
//Paths are relative to node process that is running the file. 
app.use('/static', express.static(__dirname + '/public'))

app.set('view engine', 'jade');
app.set('views', __dirname + '/templates')

app.get('/', function(req, res){
	res.render('index')
});

app.get('/blog/:title?', function(req, res){ 
	var title = req.params.title;
	if (title === undefined) {
		res.status(503);
		res.send("This page is under construction!");
	} else {
		var post = posts[title] || {};//The || {} is common pattern in JS to avoid giving an undefined variable error.
		res.render('post', { post: post });
		//The second paramater above allows dynamic content to be added.
		//The #{post.title/description} field in the post.jade file allows this. 
	}
});

app.listen(3000, function() {
	console.log("The frontend server is running on port 3000!");
});
