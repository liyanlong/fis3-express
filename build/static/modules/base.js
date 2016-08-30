define('base', ['require', 'exports', 'module', 'jquery', 'static/js/jquery-3.1.0.js'], function(require, exports, module) {

  // @require static/js/require.js
  var jquery = require('jquery');
  var $ = require('static/js/jquery-3.1.0.js');
  console.log('base', jquery, $);
  module.exports = {
      version: '0.0.1'
  };
  

});