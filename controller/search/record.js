var config = require("../../helper/config.js");

// RPC requires
var thrift = require('thrift');
var connection = thrift.createConnection(config.PRC_IP, 9091);
var SearchService = require('../../proxy/gen-nodejs/SearchService.js');

connection.on('error', function (err) {
    console.error("connection 搜索服务错误：%s", err);
});

// helper
var helper = require('../../helper/helper.js');

// 进行PRC远程调用
var queryService = thrift.createClient(SearchService, connection);

module.exports = {

    /*
     * 搜索记录页
     */
    recordList: function *() {
        var query = this.query;

        // 查询字符串和页码
        var type = query.type || "2";
        var qs = query.qs;
        var pageNum = query.fn || "1";

        // 搜索字符为空时，重定向回主页
        if (!qs) this.redirect('/');

        // 调用PRC接口，获取数据
        console.warn("%s, 搜索数据：%s", new Date(), qs);
        var recordData = yield queryService.searcher(parseInt(type), qs, parseInt(pageNum));
        recordData = JSON.parse(recordData);

        yield this.render('search', {
        title: qs + " - 比特能检索",
        qs: qs,
        queryNum: recordData.page.currentPage,
        recordCount: helper.thousandth(recordData.page.recordCount),
        recordData: recordData.page,
        type: helper.switchType(type),
        pathname: this.path
        });
    },

    /*
     * 文章的详情页
     */
    article: function *() {
        // 获取url参数
        var type = parseInt(helper.switchType(this.params.type)); // 单词转化为数字
        var id = parseInt(this.params.id);

        // 调用PRC接口，获取数据
        var article = null;
        if (type == 2) {
            article = yield queryService.thItem(id);
        } else if (type == 3) {
            article = yield queryService.maItem(id);
        } else {
            return yield this.render('public/404', {
                message: 'Page Not Found!',
                status: 404
            })
        }
        //recordInfo = JSON.parse(recordInfo);
        console.log(article);
        // 渲染
        yield this.render('article', {
            title: "详情",
            article: article,
            type: this.params.type,
            pathname: this.path
        });
    }
};