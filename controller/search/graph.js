var thrift = require('thrift');
var connection = thrift.createConnection('10.0.39.254', 9090);
var GraphService = require('../../proxy/gen-nodejs/GraphService.js');

connection.on('error', function(err){
    console.error("connection.js 错误：%s", err);
});

module.exports = {
    // 获取信息拓扑图数据
    graph: function* (){
        var query = this.query;

        // keywords，图的关键字和数据深度
        var keywords = query.kw;
        var depth = query.depth || 1;

        if(!keywords) return false;

        var graphService = thrift.createClient(GraphService, connection);

        var graphData = yield graphService.getKnowledgeUndirectedGraph(keywords, depth);
        graphData = JSON.parse(graphData);

        this.body = graphData;
    }
};