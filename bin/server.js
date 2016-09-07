#!/usr/bin/node
/*global process*/

var app = require('../app.js');
var Q = require('q');

// socket 实例
var io = require('socket.io')();
// create server
var server = require('http').createServer(app);
server.listen(process.env.npm_package_config_port || 3000);

// 开启socket
io.attach(server);


// 回调函数同步化
Q.ninvoke(server, 'listen', process.env.npm_package_config_port || 3000)
.then(function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})
.done();
