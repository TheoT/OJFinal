
/**
 * Module dependencies.
 */

var express = require('express.io')
  , routes = require('./routes')
  , user = require('./routes/user')
  , broadcast = require('./routes/broadcast')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

//start server
app.http().io()

//listen to specified port
app.listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});

//THIS IS WHERE TEH MAGIC HAPPENS
app.io.route('talkback',broadcast.sendPos);


app.get('/', routes.index);
app.get('/broadcast', function(req,res){
  res.render('broadcast.jade')
});
app.get('/follow', function(req,res){
  res.render('follow.jade')
});