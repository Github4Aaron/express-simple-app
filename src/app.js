'use strict';

var express = require('express'),
      posts = require('./mock/posts.json');

var app = express(); 


//sets the view engine parameter, and this defines setting in the express application. 
app.set('view engine', 'jade'); 
//Views takes folder path to look for templates.
//dirname variable is invoked since we are starting server from different directory. 
//If just used template path, express would only find if node process was started from same directory as app.js.
app.set('views', __dirname + '/templates');

// 1st Param: location param for route created for root, no folder or file specified
// 2nd Param: anonymous callback, and response objects send method sends message to client.
app.get('/', function(req, res) { // Most docs show shortened versions
    res.render('index.jade')
});

//:title adds a parameter to the request object.
app.get('/blog/:title', function(req, res) {
   var title = req.params.title;
   var post = posts[title];
    res.send(posts);

});
app.listen(3500, function(){ //added callback function as 2nd parameter
    console.log("The frontend server is running port 3500.")
}); // app can be started at this point using node src/app

// Error of Cannot GET / means no routes have been set up
// Starting app: Node src/app.js
