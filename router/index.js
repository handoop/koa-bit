// 分离出各个page的Controller
var indexCtrl = require('../controller/index');
var searchCtrl = require('../controller/search/record');
var graphCtrl = require('../controller/search/graph');
var expertCtrl = require('../controller/expert');

// 配置路由
module.exports = function(app){
    //首页
    app.get('/', indexCtrl.index);

    //搜索页
    app.get('/records', searchCtrl.recordList);
    app.post('/search/graph', graphCtrl.graph);

    //记录详情
    app.get('/article/:type/:id', searchCtrl.article);

    //专家详情页
    app.get('/expert/:id', expertCtrl.expert);
};