var debug = require('debug')('koa-bit');
var koa = require('koa');
var app = koa();


//log记录
var logger = require('koa-logger');
app.use(logger());

//配置文件
var config = require('./helper/config');
app.use(function *(next) {
    //helper 注入中间件，方便调用配置信息
    if (!this.config) {
        this.config = config;
    }
    yield next;
});

// 错误处理
var onerror = require('koa-onerror');
onerror(app);

// 404处理
app.use(function* (next) {
    yield next;
    if (404 != this.status) return false;
    yield this.render('public/404', {
        message: 'Page Not Found!',
        status: 404
    });
});

// session
var session = require('koa-session');
app.use(session(app));

// 模板引擎
var render = require('koa-views');
app.use(render(config.viewDir, {default: "jade"}));

//post body 解析
var bodyParser = require('koa-bodyparser');
app.use(bodyParser({
    onerror: function (err, ctx) {
        ctx.throw('body parse error', 422);
    }
}));

//数据校验
var validator = require('koa-validator');
app.use(validator({
    onValidationError: function (errMsg) {
        console.log('Validation error:', errMsg);
    }
}));

//静态文件static
//var serve = require('koa-static');
//app.use(serve(config.staticDir));

//静态文件
var staticCache = require('koa-static-cache');
app.use(staticCache(config.staticDir, {
    maxAge: 860000000,
    gzip:true
}));

//静态文件加载
var combo = require("koa-combo");
app.use(combo([config.staticDir]));

//路由
var router = require('koa-router');
app.use(router(app));

//应用路由
var appRouter = require('./router');
appRouter(app);

app.listen(config.port);
console.log('listening on port %s', config.port);

module.exports = app;

