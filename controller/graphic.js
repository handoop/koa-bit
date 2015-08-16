
var api = require("../helper/api");

api.connection.on('error', function(err){
    console.error("connection 获取关系图错误：%s", err);
});

module.exports = {

    show: function *() {
        yield this.render('graphic',{
            title: "深度知识图谱",
            keyword: this.query.keyword,
            depth: this.query.depth,
            type: this.query.type
        });
    },

    // 获取知识拓扑图数据
    getGraphic: function *(){

        var query = this.request.body;
        var keywords = query.keyword;
        var depth = query.depth;
        var type = query.type;

        if(!keywords)
            return this.body =  {nodes: [], links: [], error: "没有关键字"};

        console.warn("向数据端请求拓扑数据：%s, 深度为：%s", keywords, depth);

        var graphicData = null;
        type = parseInt(type)

        switch(type){
            case 1:
                graphicData = yield api._graphic_.getUndirectedGraphic4Knowledge(keywords, depth);
                break;
            case 2:
                graphicData = yield api._graphic_.getUndirectedGraphic4Expert(keywords, depth);
        }
        console.log('-----------无向图数据-----------------')
        console.log(graphicData)
        console.log('----------------------------')

        this.body = graphicData;
    }
};