//应用配置文件
var path = require('path');
var local = require('./local');
var _ = require('underscore');
var config = {
    "title":"",
    //默认生产环境
    "env":"production",
    // app name
    "appName": "koa-bit",
    //端口号配置
    "port": 3000,
    //"host": "172.16.8.155",
    //PRC-IP地址
    "RPC_IP": "localhost",
    //port of rpc
    "RPC_PORT" : 9090,
    //模板所在的目录
    "viewDir": path.join(__dirname,'..','views'),
    //log所在的目录
    "logDir": path.join(__dirname,'..', 'log'),
    //静态文件所在的目录
    "staticDir": path.join(__dirname,'..', 'public')


};

//当NODE_ENV环境变量值为local时
//本地调试环境
if(process.env.NODE_ENV === 'local' || process.env.NODE_ENV === 'development'){
    config = _.extend(config,local);
}

module.exports = config;