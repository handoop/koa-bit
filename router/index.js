// 分离出各个page的Controller
var indexCtrl = require('../controller/index');
var searchCtrl = require('../controller/search');
var graphCtrl = require('../controller/graphic');
var expertCtrl = require('../controller/expert');

// 配置路由
module.exports = function(app){
    //首页
    app.get('/', indexCtrl.index);

    //搜索页
    app.get('/records', searchCtrl.recordList);

    //知识图谱+名词解释
    app.post('/search/graphic', graphCtrl.getGraphic);

    //记录详情
    app.get('/article/:type/:id', searchCtrl.article);

    //专家详情页
    app.get('/expert/:id', expertCtrl.expert);

    //虚拟专家页面
    app.get('/virtual/robot', expertCtrl.forward2robot)

    //多虚拟专家自动问答
    app.get('/virtual/robot/multi2talk', expertCtrl.multi2talk)

    //轮循检测专家数量变更
    app.get('/virtual/robot/long4message', expertCtrl.long4message)

    //添加虚拟专家
    app.post('/virtual/robot/append4robot2talk', expertCtrl.append4robot2talk)

    //删除虚拟专家
    app.post('/virtual/robot/delete4robot2talk', expertCtrl.delete4robot2talk)

    //显示跟高深度的知识图谱
    app.get('/graphic/show', graphCtrl.show)

    //专家推荐
    app.get('/search/recommend4expert', searchCtrl.recommend4expert)
};