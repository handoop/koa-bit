var config = require("../../helper/config.js");

var thrift = require('thrift');
var connection = thrift.createConnection(config.PRC_IP, 9090);
var GraphService = require('../../proxy/gen-nodejs/GraphService.js');

connection.on('error', function(err){
    console.error("connection 获取关系图错误：%s", err);
});

module.exports = {
    // 获取知识拓扑图数据
    getGraph: function *(){
        var query = this.request.body;
        // keywords，图的关键字和数据深度
        var keywords = query.keyword;
        var depth = query.depth;
        var type = query.type;

        if(!keywords) return this.body =  {nodes: [], links: [], error: "没有关键字"};

        var graphService = thrift.createClient(GraphService, connection);
        console.warn("向数据端请求拓扑数据：%s, 深度为：%s", keywords, depth);

        var graphData = null;
        switch(type){
            case 1:
                graphData = yield graphService.getKnowledgeUndirectedGraph(keywords, depth);
                break;
            case 2:
                graphData = yield graphService.getExpertUndirectedGraph(keywords, depth);
        }

        this.body = graphData;
    }
};