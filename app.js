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

// 设置html 模板要求用 ejs 解析
app.engine('html', require('ejs').renderFile);

// 设置默认的 模板后缀
app.set('view engine', 'jade');

// 设置模板的读取地址
app.set('views', process.cwd() + '/build/views');

// 挂载静态资源路径
app.use('/static', express.static(path.join(__dirname, 'build', 'static')));

// 设置首页
app.get('/', function (req, res) {
    res.render('page/index.html');
});

// 挂载其他目录
app.use('/admin', admin);

module.exports = app;
