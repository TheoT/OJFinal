
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

app.http().io()


app.listen(3000)

app.io.route('talkback',broadcast.sendPos);

app.get('/broadcast',function(req,res){
  res.render('broadcast.jade')
})

app.get('/follow',function(req,res){
  res.render('follow.jade')
})