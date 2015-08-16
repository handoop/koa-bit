
service SearchAPIProxy{

    /**
    * 全文搜索
    *
    * cl : 0表示Thesis,，1表示Manazine，2表示Patent，3表示Information，4表示Expert
    *       由各个实体的FLAG决定
    *
    * userId : 用户id，我们将用户的检索历史结构化到数据库中，当前没用用户登录
    *               这个值应该为-1，由node将检索历史保存到session中
    **/
    string searcher(1:i32 cl, 2:string query, 3:i32 pageNum, 4:i64 userId)

    /**
    * Thesis详情页面
    **/
    string getThesisDetail(1:i64 id)

    /**
    * Magazine详情页面
    **/
    string getMagazineDetail(1:i64 id)

    /**
    * Patent详情页面
    **/
    string getPatentDetail(1:i64 id)

}