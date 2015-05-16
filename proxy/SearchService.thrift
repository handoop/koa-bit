
namespace java org.victoria.BlueFly.service

service SearchService{

//    string searcher(1:string query, 2:i32 pageNum)

    string searcher(1:i32 cl, 2:string query, 3:i32 pageNum)

    string thItem(1:i64 id)

    string maItem(1:i64 id)

}