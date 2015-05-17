var thrift = require('thrift');
var connection = thrift.createConnection('10.0.39.254', 9090);
var GraphService = require('../../proxy/gen-nodejs/GraphService.js');

connection.on('error', function(err){
    console.error("connection.js 错误：%s", err);
});

module.exports = {
    // 获取信息拓扑图数据
    graph: function *(){
        var query = this.request.body;
        // keywords，图的关键字和数据深度
        var keywords = query.keyword;
        var depth = query.depth;

        if(!keywords) return this.body =  {nodes: [], links: [], error: "没有关键字"};

        var graphService = thrift.createClient(GraphService, connection);
        console.warn("向数据端请求数据：%s, 深度为：%s", keywords, depth);
        var graphData = yield graphService.getKnowledgeUndirectedGraph(keywords, depth);

        this.body = graphData;
    }
};