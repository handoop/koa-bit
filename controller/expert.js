var config = require("../helper/config");
// RPC requires
var thrift = require('thrift');
var connection = thrift.createConnection(config.PRC_IP, 9092, {connect_timeout: 10000, retry_delay: 2000});
var ExpertService = require('../proxy/gen-nodejs/ExpertService4Protol.js');

connection.on('error', function (err) {
    console.error("connection 专家服务错误：%s", err);
});

var queryService = thrift.createClient(ExpertService, connection);


module.exports = {
    // 专家信息
    expert: function *(){
        var query = this.query;

        // 查询字符串和页码
        var pageNum = query.pn || "1";

        var id = parseInt(this.params.id);
        // 调用PRC接口，获取数据
        console.warn("向数据端获取专家数据，id号：%s", id);
        var data = yield queryService.getExpertDetail(id, parseInt(pageNum));

        // 打印数据
        console.log("----------获得专家数据----------");
        console.log(data);
        console.log("------------------------------");
        // 专家数据
        data = JSON.parse(data);

        return yield this.render('expertInfo', {
            title: "专家详情",
            pathname: this.path,
            expertInfo: data.expert,
            recordData: data.Page,
            id: id
        });
    }
};