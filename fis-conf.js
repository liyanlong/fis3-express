/*global fis*/

/*!
 * 负责 build 前端构建资源
 */

// 忽视相关文件
fis.set('project.ignore',[
    'bin/**',
    'config/**',
    'build/**',
    'modules/**',
    '.eslintrc.js',
    'app.js',
    'node_modules/**',
    'fis-conf.js',
    'package.json',
    'LICENCS',
    'READEME.md'
]);

// 设置文本文件
// fis.set('project.fileType.text', 'jade');

// amd 策略
fis.hook('amd', {

    // 配置项
    paths: {
        jquery: '/static/js/jquery.js'
    },
    packages: [{
        name: 'ui',
        location: '/static/modules/ui',
        main: 'index.js'
    }]
});

// 发布 static 文件
fis.match('/static/modules/(**).js', {
    isMod: true,
    moduleId: '$1'
});
//
// // 设置 js 为模块
// fis.match('/static/js/{!require}.js', {
//     isMod: true
// });
//
// 设置jquery id名称
// 转换
fis.match('/static/js/jquery.js', {
    id: 'jquery',
    skipDepsAnalysis: true,
    isMod: true
});

// 发布组件到静态目录
fis.match('/widget/**', {
    isMod : true,
    release: '/static$0',
    // 同名依赖
    useSameNameRequire: true
});

// js 模块化
// fis.match('/widget/{*,**/*}.js', {
//     isMod : true
//     // 显示声明依赖
// });

// 发布 widget 模板
// 组件模板要求 有命名空间
fis.match('/{widget,views}/**.{html,jade}', {
    isMod : true,
    isHtmlLike : true,
    // map.json 后端参数
    url: '$&'
});

// 发布页面
fis.match('/widget/**.{html,jade}', {
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
