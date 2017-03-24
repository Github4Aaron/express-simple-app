'use strict';

var express = require('express');

var app = express(); 

// 1st Param: location param for route created for root, no folder or file specified
// 2nd Param: anonymous callback, and response objects send method sends message to client.
app.get('/', function(request, response) { 
    response.send("Aaron rocks");
});
app.listen(3500); // app can be started at this point using node src/app

// Error of Cannot GET / means no routes have been set up
