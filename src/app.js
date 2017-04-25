'use strict';

var express = require('express'),
	  posts = require('./mock/posts.json');

var app = express();

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
