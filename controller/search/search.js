// RPC requires
var thrift = require('thrift');
var connection = thrift.createConnection('10.0.39.254', 9091);
var SearchService = require('../../proxy/gen-nodejs/SearchService.js');

connection.on('error', function(err){
    console.error("connection.js 错误：%s", err);
});

// helper
var helper = require('../../helper/helper.js');

module.exports = {
    // 获取搜索记录
    record: function* (){
        var query = this.query;

        // 查询字符串和页码
        var type = query.type || 2;
        var qs = query.qs;
        var pageNum = query.pn || 1;

        // 搜索字符为空时，重定向回主页
        if(!qs) this.redirect('/');

        // 进行PRC远程调用
        var queryService = thrift.createClient(SearchService, connection);

        // 获取数据
        //var recordData = yield queryService.searcher(type, qs, pageNum);
        //recordData = JSON.parse(recordData);

        var recordData = {"page":{"beginIndex":1,"currentPage":1,"endIndex":5,"pageCount":1022,"pageSize":10,"recordCount":10214,"recordList":[{"authors":"戴稳胜;张阿兰;谢邦昌","id":142,"keyWords":"<span class='highlight'>数据</span><span class='highlight'>挖掘</span>;信息处理技术;数据仓库;企业竞争;建模工作;实务工作者;辅助决策;决策行为;跟踪分析;<span class='highlight'>数据</span>分析方法","summary":"<span class='highlight'>数据</span><span class='highlight'>挖掘</span>是一种新兴的信息处理技术,其主要特点是对数据仓库中的大量业务<span class='highlight'>数据</span>进行抽取、转换、分析和建模工作以获取辅助决策的关键信息。目前<span class='highlight'>数据</span><span class='highlight'>挖掘</span>在众多领域都得到应用,给各行业带来了实际收益。比如在保险业,通过<span class='highlight'>数据</span><span class='highlight'>挖掘</span>可以建诈欺诈侦测模型,降低企业成本,在金融业可以协助企业建立交易规则,增加企业把握市场的能力等。为满足读者要求,使实务工作者掌握这一新兴<span class='highlight'>数据</span>分析技术,本刊将与中国人民大学<span class='highlight'>数据</span><span class='highlight'>挖掘</span>中心合作","title":"<span class='highlight'>数据</span><span class='highlight'>挖掘</span>的方法、流程及应用"},{"authors":"戴稳胜;张阿兰;谢邦昌","id":2709,"keyWords":"<span class='highlight'>数据</span><span class='highlight'>挖掘</span>;信息处理技术;数据仓库;企业竞争;建模工作;实务工作者;辅助决策;决策行为;跟踪分析;<span class='highlight'>数据</span>分析方法","summary":"<span class='highlight'>数据</span><span class='highlight'>挖掘</span>是一种新兴的信息处理技术,其主要特点是对数据仓库中的大量业务<span class='highlight'>数据</span>进行抽取、转换、分析和建模工作以获取辅助决策的关键信息。目前<span class='highlight'>数据</span><span class='highlight'>挖掘</span>在众多领域都得到应用,给各行业带来了实际收益。比如在保险业,通过<span class='highlight'>数据</span><span class='highlight'>挖掘</span>可以建诈欺诈侦测模型,降低企业成本,在金融业可以协助企业建立交易规则,增加企业把握市场的能力等。为满足读者要求,使实务工作者掌握这一新兴<span class='highlight'>数据</span>分析技术,本刊将与中国人民大学<span class='highlight'>数据</span><span class='highlight'>挖掘</span>中心合作","title":"<span class='highlight'>数据</span><span class='highlight'>挖掘</span>的方法、流程及应用"},{"authors":"中国人民大学统计学系数据挖掘中心","id":75,"keyWords":"统计;<span class='highlight'>数据</span><span class='highlight'>挖掘</span>;信息技术","summary":"文章以统计学最近 40年的发展走势作为论述的起点 ,逐步对统计方法在<span class='highlight'>数据</span><span class='highlight'>挖掘</span>算法设计、开发过程中的应用情况 ,进行客观、系统的介绍和分析 ,进而提出统计学和<span class='highlight'>数据</span><span class='highlight'>挖掘</span>协同发展的广阔前景。","title":"统计学与<span class='highlight'>数据</span><span class='highlight'>挖掘</span>"},{"authors":"中国人民大学统计学系数据挖掘中心","id":13656,"keyWords":"统计;<span class='highlight'>数据</span><span class='highlight'>挖掘</span>;信息技术","summary":"文章以统计学最近 40年的发展走势作为论述的起点 ,逐步对统计方法在<span class='highlight'>数据</span><span class='highlight'>挖掘</span>算法设计、开发过程中的应用情况 ,进行客观、系统的介绍和分析 ,进而提出统计学和<span class='highlight'>数据</span><span class='highlight'>挖掘</span>协同发展的广阔前景。","title":"统计学与<span class='highlight'>数据</span><span class='highlight'>挖掘</span>"},{"authors":"黄洪宇;林甲祥;陈崇成;樊明辉","id":36527,"keyWords":"<span class='highlight'>数据</span><span class='highlight'>挖掘</span>;离群检测;异常;高维离群","summary":"通过对当前有代表性的离群<span class='highlight'>数据</span><span class='highlight'>挖掘</span>算法的分析和比较,总结了各算法的特性及优缺点,为使用者选择、学习、改进算法提供了依据。此外,针对高维<span class='highlight'>数据</span>和空间<span class='highlight'>数据</span>中离群检测的特殊性,在现有算法的基础上,分析了高维<span class='highlight'>数据</span>和空间<span class='highlight'>数据</span>离群检测需要注意的一些问题,以便于研究者提出新的有效的算法。","title":"离群<span class='highlight'>数据</span><span class='highlight'>挖掘</span>综述"},{"authors":"周小成;汪小钦","id":87,"keyWords":"遥感影像;空间<span class='highlight'>数据</span><span class='highlight'>挖掘</span>(SDM);知识发现(KDD)","summary":"遥感影像<span class='highlight'>数据</span><span class='highlight'>挖掘</span>是一个有着广阔应用前景的研究领域。由于遥感影像数据库的海量特征,遥感影像<span class='highlight'>数据</span><span class='highlight'>挖掘</span>已成为空间<span class='highlight'>数据</span><span class='highlight'>挖掘</span>的主流。依据遥感影像<span class='highlight'>数据</span><span class='highlight'>挖掘</span>的方法和目的,从图像索引和检索、图像分类、图像聚类、空间关联规则<span class='highlight'>挖掘</span>、影像变化检测以及高光谱<span class='highlight'>数据</span><span class='highlight'>挖掘</span>六个方面对遥感影像<span class='highlight'>数据</span><span class='highlight'>挖掘</span>的国内外研究现状进行了综述。并指出了遥感影像<span class='highlight'>数据</span><span class='highlight'>挖掘</span>和知识发现中应该着力解决和注意的几个问题。","title":"遥感影像<span class='highlight'>数据</span><span class='highlight'>挖掘</span>研究进展"},{"authors":"周小成;汪小钦","id":14477,"keyWords":"遥感影像;空间<span class='highlight'>数据</span><span class='highlight'>挖掘</span>(SDM);知识发现(KDD)","summary":"遥感影像<span class='highlight'>数据</span><span class='highlight'>挖掘</span>是一个有着广阔应用前景的研究领域。由于遥感影像数据库的海量特征,遥感影像<span class='highlight'>数据</span><span class='highlight'>挖掘</span>已成为空间<span class='highlight'>数据</span><span class='highlight'>挖掘</span>的主流。依据遥感影像<span class='highlight'>数据</span><span class='highlight'>挖掘</span>的方法和目的,从图像索引和检索、图像分类、图像聚类、空间关联规则<span class='highlight'>挖掘</span>、影像变化检测以及高光谱<span class='highlight'>数据</span><span class='highlight'>挖掘</span>六个方面对遥感影像<span class='highlight'>数据</span><span class='highlight'>挖掘</span>的国内外研究现状进行了综述。并指出了遥感影像<span class='highlight'>数据</span><span class='highlight'>挖掘</span>和知识发现中应该着力解决和注意的几个问题。","title":"遥感影像<span class='highlight'>数据</span><span class='highlight'>挖掘</span>研究进展"},{"authors":"戴稳胜;陈国君;谢邦昌","id":21138,"keyWords":"客服中心;利润中心;顾客忠诚度;客户忠诚;<span class='highlight'>数据</span><span class='highlight'>挖掘</span>;一对一营销;营销机会;预测性信息;企业类型;成本中心","summary":"","title":"客服中心成为利润中心的出发点——<span class='highlight'>数据</span><span class='highlight'>挖掘</span>"},{"authors":"陈楠;王钦敏;林宗坚","id":35122,"keyWords":"空间<span class='highlight'>数据</span><span class='highlight'>挖掘</span>;地理信息系统;人口压力;空间分布模式;主成分分析","summary":"提出人口压力指标,运用主成分分析方法对我国人口压力作出评价,并根据压力指标对我国各个省市进行了分类。在其基础之上,运用空间<span class='highlight'>数据</span><span class='highlight'>挖掘</span>中GIS的空间自相关分析方法,分析了我国人口压力空间分布模式;研究认为我国人口压力从西部向东部总体减小,人口压力在空间分布上呈现明显的聚集模式。围绕京津、江浙闽、山东等区域与周围省市的人口压力形成低—低关联模式,围绕陕甘青、川渝等省市与周围保持高—高关联模式。这种空间","title":"基于GIS的人口压力空间分布模式研究——空间<span class='highlight'>数据</span><span class='highlight'>挖掘</span>在人口学领域应用的实例"},{"authors":"罗艳;何建东;李久丹","id":25056,"keyWords":"<span class='highlight'>数据</span><span class='highlight'>挖掘</span>;<span class='highlight'>数据</span><span class='highlight'>挖掘</span>算法;知识发现","summary":"作为一项通用的知识发现技术,<span class='highlight'>数据</span><span class='highlight'>挖掘</span>技术旨在从少量<span class='highlight'>数据</span>中提取出人们感兴趣的<span class='highlight'>数据</span>信息。文章对<span class='highlight'>数据</span><span class='highlight'>挖掘</span>概念的产生,<span class='highlight'>数据</span><span class='highlight'>挖掘</span>与常规<span class='highlight'>数据</span>分析的主要区别,所能解决的几大类问题和所应用的领域都有清晰的论述,并且结合<span class='highlight'>数据</span><span class='highlight'>挖掘</span>的应用模型及技术提出了<span class='highlight'>数据</span><span class='highlight'>挖掘</span>的应用前景。","title":"论<span class='highlight'>数据</span><span class='highlight'>挖掘</span>的发展前景及潜在价值"}]}}

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