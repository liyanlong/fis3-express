#!/usr/bin/node
var app = require('../app.js');

/*global process*/

// 读取package变量
var server = app.listen(process.env.npm_package_config_port || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
