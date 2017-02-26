var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

require ("./test/app.js")(app);

//var port = process.env.PORT || 3000;

//app.listen(port);
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
/*
server.listen(port, function() {
    console.log("App is running on port " + port);
});*/
