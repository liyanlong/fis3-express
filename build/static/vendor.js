;/*!static/modules/base.js*/
define('base', ['require', 'exports', 'module', 'jquery', 'static/js/jquery-3.1.0.js'], function(require, exports, module) {

  // @require static/js/require.js
  var jquery = require('jquery');
  var $ = require('static/js/jquery-3.1.0.js');
  console.log('base', jquery, $);
  module.exports = {
      version: '0.0.1'
  };
  

});
;/*!static/modules/ui/tabs.js*/
define('ui/tabs', ['require', 'exports', 'module', 'jquery'], function(require, exports, module) {

  // @require static/js/require.js
  /* global module*/
  //define(function (require, exports, module) {
      var $ = require('jquery');
      module.exports = {
          version: '0.0.0',
          jQuery: $
      };
  

});
;/*!static/modules/ui/timeline.js*/
define('ui/timeline', ['require', 'exports', 'module'], function(require, exports, module) {

  
  console.log('this is timeline');
  

});