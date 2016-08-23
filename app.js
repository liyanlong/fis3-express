/*global __dirname,process */
var express = require('express');
var path = require('path');
var package = require('./package.json');
var admin = require('./modules/admin');

// 创建app实例
var app = express();

// 设置 web app 版本
app.locals.version = package.version;

// 设置 template engine 模板引擎
app.engine('jade', require('jade').__express);
app.engine('html', require('ejs').renderFile);

// 设置模板的 位置
app.set('views', process.cwd() + '/build/views');

app.get('/', function (req, res) {
    res.render('page/index.html');
});

app.use('/admin', admin);

// 设置静态资源路径
app.use('/static', express.static(path.join(__dirname, 'build', 'static')));

module.exports = app;
