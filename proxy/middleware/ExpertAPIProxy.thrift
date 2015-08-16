
service ExpertAPIProxy{

    /**
    * 专家的个人信息
    **/
	string details(1:i64 id)

    /**
    * 专家自动问答的实现
    **/
	string auto2talk(1:i64 id, 2:string question)

    /**
    * 专家动态，也就是专家情报
    **/
    string tweets(1:i64 id)

    /**
    * 专家的所有文献
    **/
    string articles(1:i64 id)

}

