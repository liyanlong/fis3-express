Express + FIS3 静态资源管理
==========
> FIS3 是由百度FEX TEAM打造的一个前端静态资源管理解决方案，
> 目的是为了解决发布静态资源和管理资源的问题

**技术要求**
- express
- fis3

站点目录结构
==========

```
|- bin/
    |- server.js # 启动站点配置

|- build/    # 发布静态资源目录
    |- static/
    |- widget/
    |- views/

|- modules/  # express app

|- page/     # 模板文件
|- static/   # 模板文件
|- app.js    # 启动 app
|- fis-conf.js # 配置静态资源脚本
|- READEME.md
```

modules规范
==========

匹配指定的目录为 模块
``` javascript
fis.match('/static/modules/(**).js', {
    isMod: true,
    moduleId: '$1'
});
```

允许 amd模块 以 commonjs 的写法写组件
```javascript
var $ = require('static/js/jquery.js');
console.log('base', $);
module.exports = {
    version: '0.0.1'
};
```

最终会编译成如下格式
``` javascript

define('base', ['require', 'exports', 'module', 'jquery'], function(require, exports, module) {
  // @require jquery
  var $ = require('jquery');
  console.log('base', $);
  module.exports = {
      version: '0.0.1'
  };
});
```
如果不想要有 require, exports, module 这三个模块， 可以设置fis-conf
``` javascript
fis.hook('amd', {

    // 取消 require, module, exports 内置模块
    skipBuiltinModules: true
});

```
> 一般组件 内部会引用 其它组件,所以 一定会用到这三个模块

**更多关于 fis-amd 的配置 请参考 [fis3-amd](https://github.com/fex-team/fis3-hook-amd#%E9%85%8D%E7%BD%AE%E9%A1%B9)**
