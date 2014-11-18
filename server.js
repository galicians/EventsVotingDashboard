

/**
 * Module dependencies
 */

var express = require('express');
var app = express();
var server = require('http').createServer(app)
var path = require('path');

/**
 * Configuration
 */

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/app');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);


// app.use(express.bodyParser());
// app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, '/app')));


/**
 * Routes
 */

// serve index
app.get('/', function(req, res) {
 res.render('EventDetails.html');
})

/**
 * Start Server
 */
server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});