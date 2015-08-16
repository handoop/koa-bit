
//rpc
var api = require("../helper/api");
// helper
var helper = require('../helper/helper');

module.exports = {

    /*
     * 搜索记录页
     */
    recordList: function *() {
        var query = this.query;

        // 查询字符串和页码
        var type = query.type || "0";
        var qs = query.qs;
        var pageNum = query.pn || "1";

        // 搜索字符为空时，重定向回主页
        if (!qs) return this.redirect('/');

        // 调用PRC接口，获取数据
        console.warn("向数据端获取搜素数据，关键字：%s, 类型为：%s", qs, type);


        var userId = typeof (this.session.user) == 'undefined' ? -1 : this.session.user.id;
        var recordData = yield api._search_.searcher(parseInt(type), qs, parseInt(pageNum), true, parseInt(userId));

        console.log("----------获得搜索页数据----------");
        console.log(recordData);
        console.log("------------------------------");

        recordData = JSON.parse(recordData);
        qs = recordData.q

        return yield this.render('search', {
            title: qs + " - 比特能检索",
            qs: qs,
            queryNum: recordData.page.currentPage,
            recordCount: helper.thousandth(recordData.page.recordCount),
            page: recordData.page,
            experts: recordData.experts,
            typeNum: recordData.cl,
            pathname: this.path
        });
    },

    /*
     * 文章的详情页
     */
    article: function *() {
        // 获取url参数
        var type = this.params.type; // 类型
        var id = parseInt(this.params.id);
        // 调用PRC接口，获取数据
        var data = null;
        console.warn("向数据端请求文章详细数据, id: %s", id);
        if (type == 0) {
            data = yield api._search_.getThesisDetail(id);
        } else if (type == 1) {
            data = yield api._search_.getMagazineDetail(id);
        } else {
            return yield this.render('public/404', {
                message: 'Page Not Found!',
                status: 404
            })
        }

        data = JSON.parse(data)

        var data4thesis = yield api._search_.searcher(0, data.article.keywords ? data.article.keywords : data.article.title, 1, false, -1);
        var data4magazine = yield api._search_.searcher(1, data.article.keywords ? data.article.keywords : data.article.title, 1, false, -1);

        data4thesis = JSON.parse(data4thesis)
        data4magazine = JSON.parse(data4magazine)

        if(type==0)
            data4thesis.page.recordList.splice(0, 1)
        if(type==1)
            data4magazine.page.recordList.splice(0, 1)

        // 打印数据
        console.log("----------获得文章数据----------");
        console.log(data);
        console.log(data4thesis)
        console.log(data4magazine)
        console.log("------------------------------");
        // 渲染
        return yield this.render('article', {
            title: "详情",
            article: data.article,
            authors: data.authors || [],
            thesises: data4thesis.page.recordList,
            magazines: data4magazine.page.recordList,
            type: type,
            pathname: this.path
        });
    },

    //专家推荐
    recommend4expert: function *() {
        var keyword = this.query.keyword
        var data = yield api._search_.find4related4expert(keyword)

        console.log('----------推荐的专家--------')
        console.log(data)

        data = JSON.parse(data)
        this.body = data
    }
};