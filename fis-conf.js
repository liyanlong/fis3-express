/*global fis*/

/*!
 * 负责 build 前端构建资源
 */

// 忽视相关文件
fis.set('project.ignore',[
    'bin/**',
    'build/**',
    'modules/**',
    '.eslintrc.js',
    'app.js',
    'node_modules/**',
    'fis-conf.js',
    'package.json'
]);

// amd 策略
fis.hook('amd', {
  // 配置项
});

// 发布组件
fis.match('/widget/**', {
    isMod : true,
    release: '/static$0'
});

// 发布 static 文件
fis.match('/static/**', {
    isMod: false,
    release: '$&'
});

// 设置为模块
fis.match('/static/modules/*.js', {
    isMod: true
});

// 发布 页面模板 和 widget模板
fis.match('/{widget,page}/**.{html,jade}',{
    isMod : true,
    isHtmlLike : true,
    url: '$&',
    release: '/views/$&'
});

// 纯前端项目, 依赖引入
fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    // 分析 __RESOURCE_MAP__ 结构，来解决资源加载问题
    postpackager: fis.plugin('loader', {
        resourceType: 'amd',
        useInlineMap: true // 资源映射表内嵌
    })
});
