module.exports = {
    // 主页controller
    index: function* (){
        yield this.render('index',{"title": "bit专家"});
    }
};