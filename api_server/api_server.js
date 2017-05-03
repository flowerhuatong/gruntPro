var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();

var res_comm = require('./res_comm');
var api_comm = require('./api_comm');

var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.set('port', process.env.PORT || 19000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());

http.listen(app.get('port'), function () {
  console.log('API服务器已启动，开始监听端口' + app.get('port'));
});

api_comm.request(app, res_comm);


