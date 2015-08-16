
/**
* @author thanatos
* @date 2015-08-10
**/
struct User{

    1:string account,
    2:string password

}

service UserAPIProxy{

    /**
    * 根据account和password查找用户
    **/
    bool find(1:string account, 2:string password)

    /**
    * 一般用于注册
    **/
    bool save(1:User user)

    /**
    * 用户的检索历史
    **/
    string history4search(1:i64 id)

}