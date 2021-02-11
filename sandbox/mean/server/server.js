var express  = require('express');
var engines = require('consolidate');
var app      = express();
var port     = process.env.PORT || 8080;

var HTTPStatus = require('http-status');
var compression = require('compression')

var flash 	 = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');


// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms
app.use( bodyParser.urlencoded() );       // to support JSON-encoded bodies
app.use(compression());

// routes ======================================================================
require('./routes.js')(app); // load our routes and pass in our app

app.listen(port);

console.log(port);
