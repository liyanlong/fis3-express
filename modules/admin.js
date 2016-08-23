/*!
 * admin 子模块
 *
 */

'use strict';
var express = require('express');
var admin = module.exports = express();

admin.on('mount', function () {
    // 加载 admin  模块成功
    //console.log(app);
});

// /admin/* 的所有赢球
admin.all('*', function (req, res, next) {
    console.log('admin all');
    next();
});

// 每一个请求前执行 该中间件
admin.use(function (req, res, next) {
    console.log('Time: %d', Date.now());
    next();
});

admin.get('/', function (req, res) {
    res.send('hello admin');
});

admin.get('/login', function (req, res) {
    res.send('login');
});
