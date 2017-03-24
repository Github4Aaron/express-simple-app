'use strict';

var express = require('express');

var app = express(); 

// 1st Param: location param for route created for root, no folder or file specified
// 2nd Param: anonymous callback, and response objects send method sends message to client.
app.get('/', function(req, res) { // Most docs show shortened versions
    res.send("<h1>Aaron rocks</h1>");
});
app.listen(3500, function(){ //added callback function as 2nd parameter
    console.log("The frontend server is running port 3500.")
}); // app can be started at this point using node src/app

// Error of Cannot GET / means no routes have been set up
