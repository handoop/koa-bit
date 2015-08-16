

//requires, rpc
var api = require('../helper/api')
var helper = require('../helper/helper')

api.connection.on('error', function (err) {
    console.error("connection 专家服务错误：%s", err)
})

module.exports = {
    // 专家信息
    expert: function *(){
        var query = this.query

        var t = this
        // 查询字符串和页码
        var pageNum = query.pn || "1"
        var flag = query.flag || "baseInfo"

        var id = parseInt(this.params.id)

        // 调用PRC接口，获取数据
        console.warn("向数据端获取专家数据，id号：%s", id)

        var info = yield api._expert_.details(id)
        var page = yield api._expert_.articles(id, pageNum)
        var tweets = yield api._expert_.tweets(id, pageNum)

        // 打印数据
        console.log("----------获得专家数据----------")
        console.log(page)
        console.log(info)
        console.log(tweets)
        console.log("------------------------------")
        // 专家数据
        info = JSON.parse(info)
        page = JSON.parse(page)
        tweets = JSON.parse(tweets)

        for(var i=0; i<tweets.recordList.length; i++){
            tweets.recordList[i].date = helper.dateFormat(new Date(tweets.recordList[i].date), 'yyyy-MM-dd')
        }

        var score = "★★★★★☆☆☆☆☆".substr(5 - parseInt(info.details.evaluation.score + 0.5), 5)

        return yield this.render('expertInfo', {
            title: "专家详情",
            pathname: this.path,
            details: info.details,
            knowledges: info.knowledges,
            page: page,
            tweets: tweets,
            score: score,
            flag: flag,
            id: id
        });
    },

    forward2robot: function *() {
        yield this.render('robot',{
            robots: this.session.robots || [],
            title: "bit专家机器人",
            pathname: this.path
        });
    },

    //添加专家机器人
    append4robot2talk: function *() {
        var robots = this.session.robots || []
        var query = this.request.body;

        for(var i in robots){
            if(query.robotId == robots[i].id){
                this.body = {
                    code: 2
                }
                return
            }
        }

        var details = yield api._expert_.details(parseInt(query.robotId))

        console.log('-------details---------')
        console.log(details)

        details = JSON.parse(details)

        if(details){
            robots.push(details.details)
            this.session.robots = robots
            this.body = {
                code: 0
            }
        }else{
            this.body = {
                code: 1
            }
        }
    },

    //删除虚拟专家
    delete4robot2talk: function *() {
        var robots = this.session.robots || []
        var query = this.request.body
        for(var i in robots){
            if(robots[i].id == query.robotId){
                robots.splice(i, 1)
                break
            }
        }
        this.session.robots = robots
        this.body = {
            code: 0
        }
    },

    //多机器人协同服务
    multi2talk: function *() {
        var query = this.query
        var robots = this.session.robots || []
        var question = query.question

        var answers = []

        for(var i in robots){
            var answer = JSON.parse(yield api._expert_.auto2talk(robots[i].id, question, 4))
            answers.push({
                id: robots[i].id,
                name: robots[i].name,
                answer: answer
            })
        }

        console.log('---------multi talk-----------')
        console.log(answers)

        this.body = answers
    },

    //长轮循
    long4message: function *(){
        var robots = this.session.robots || []
        this.body = robots
    }

};