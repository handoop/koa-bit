// RPC requires
var thrift = require('thrift');
var connection = thrift.createConnection('10.0.39.254', 9091);
var SearchService = require('../../proxy/gen-nodejs/SearchService.js');

connection.on('error', function (err) {
    console.error("connection.js 错误：%s", err);
});

// helper
var helper = require('../../helper/helper.js');

module.exports = {
    // 获取搜索记录
    record: function *() {
        var query = this.query;

        // 查询字符串和页码
        var type = query.type || 2;
        var qs = query.qs;
        var pageNum = query.pn || 1;

        // 搜索字符为空时，重定向回主页
        if (!qs) this.redirect('/');

        // 进行PRC远程调用
        var queryService = thrift.createClient(SearchService, connection);

        var recordData = {
            "page": {
                "beginIndex": 1,
                "currentPage": 1,
                "endIndex": 5,
                "pageCount": 1022,
                "pageSize": 10,
                "recordCount": 10214,
                "recordList": [
                    {
                        "authors": "戴稳胜;张阿兰;谢邦昌",
                        "id": 142,
                        "keyWords": "<span class='highlight'>数据</span><span class='highlight'>挖掘</span>;信息处理技术;数据仓库;企业竞争;建模工作;实务工作者;辅助决策;决策行为;跟踪分析;<span class='highlight'>数据</span>分析方法",
                        "summary": "<span class='highlight'>数据</span><span class='highlight'>挖掘</span>是一种新兴的信息处理技术,其主要特点是对数据仓库中的大量业务<span class='highlight'>数据</span>进行抽取、转换、分析和建模工作以获取辅助决策的关键信息。目前<span class='highlight'>数据</span><span class='highlight'>挖掘</span>在众多领域都得到应用,给各行业带来了实际收益。比如在保险业,通过<span class='highlight'>数据</span><span class='highlight'>挖掘</span>可以建诈欺诈侦测模型,降低企业成本,在金融业可以协助企业建立交易规则,增加企业把握市场的能力等。为满足读者要求,使实务工作者掌握这一新兴<span class='highlight'>数据</span>分析技术,本刊将与中国人民大学<span class='highlight'>数据</span><span class='highlight'>挖掘</span>中心合作",
                        "title": "<span class='highlight'>数据</span><span class='highlight'>挖掘</span>的方法、流程及应用"
                    },
                    {
                        "authors": "戴稳胜;张阿兰;谢邦昌",
                        "id": 2709,
                        "keyWords": "<span class='highlight'>数据</span><span class='highlight'>挖掘</span>;信息处理技术;数据仓库;企业竞争;建模工作;实务工作者;辅助决策;决策行为;跟踪分析;<span class='highlight'>数据</span>分析方法",
                        "summary": "<span class='highlight'>数据</span><span class='highlight'>挖掘</span>是一种新兴的信息处理技术,其主要特点是对数据仓库中的大量业务<span class='highlight'>数据</span>进行抽取、转换、分析和建模工作以获取辅助决策的关键信息。目前<span class='highlight'>数据</span><span class='highlight'>挖掘</span>在众多领域都得到应用,给各行业带来了实际收益。比如在保险业,通过<span class='highlight'>数据</span><span class='highlight'>挖掘</span>可以建诈欺诈侦测模型,降低企业成本,在金融业可以协助企业建立交易规则,增加企业把握市场的能力等。为满足读者要求,使实务工作者掌握这一新兴<span class='highlight'>数据</span>分析技术,本刊将与中国人民大学<span class='highlight'>数据</span><span class='highlight'>挖掘</span>中心合作",
                        "title": "<span class='highlight'>数据</span><span class='highlight'>挖掘</span>的方法、流程及应用"
                    }
                ]
            }
        };

        // 获取数据
        var recordData = yield queryService.searcher(type, qs, pageNum);
        recordData = JSON.parse(recordData);


        yield this.render('search', {
            title: qs + " - 比特能检索",
            qs: qs,
            queryNum: recordData.page.currentPage,
            recordCount: helper.thousandth(recordData.page.recordCount),
            recordData: recordData.page,
            type: type
        });
    }
};