/*!
 * admin 子模块
 *
 */

'use strict';
var express = require('express');
var Q = require('q');
var admin = module.exports = express();

function readFile (filename, callback) {
    var error = null;
    var data = {
        filename: filename,
        type : 'html'
    };

    // 定义错误返回
    if (filename === '') {
        error =  'no filename';
        return callback.call(null, error, {});
    }
    setTimeout( function () {
        callback.call(null, error, data);
    }, 1000);
}

function loadData (filename) {
    var defer = Q.defer();
    readFile(filename, defer.makeNodeResolver());
    return defer.promise;
}

function getData (name) {
    var deferred = Q.defer();

    if(name === '') {
        Q.delay(1000).then(function () {
            deferred.reject(new Error('empty param'));
        });
    }else{
        deferred.resolve({
            name: name
        });
    }
    return deferred.promise;
}

admin.on('mount', function () {
    // 加载 admin  模块成功
    //console.log(app);
});

// /admin/* 所有的该请求都会访问这个过滤方法
admin.all('*', function (req, res, next) {
    next();
});

// 每一个请求前执行 该中间件
admin.use(function (req, res, next) {
    console.log('Time: %d', Date.now());
    // 异步调用
    getData('aaa').then( function (data) {
        console.log(data);
    });
    Q.nfbind(next)(null);
    // next('aaa');
});

admin.get('/', function (req, res) {
    Q.nfcall(readFile, '').then(function (data) {
        console.log(data);
        res.json(data);
    }).catch(function (reason) {
        console.log(reason);
        res.json(reason);
    }).done();
});

admin.get('/login', function (req, res) {
    loadData('abc.txt').then(function () {
        res.send('login');
    }).catch(function (reason) {
        res.json(reason);
    }).done();
});
