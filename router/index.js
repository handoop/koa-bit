// 分离出各个page的Controller
var indexCtrl = require('../controller/index');
var searchCtrl = require('../controller/search');

// 配置路由
module.exports = function(app){
    //首页
    app.get('/', indexCtrl.index);

    //搜索
    app.get('/search', searchCtrl.search);
};