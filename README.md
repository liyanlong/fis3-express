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
