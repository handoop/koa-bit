
service GraphicAPIProxy{

    /**
    * 知识图谱
    **/
    string getUndirectedGraphic4Knowledge(1:string keyword, 2:i32 depth)

    /**
    * 专家图谱
    **/
    string getUndirectedGraphic4Expert(1:string name, 2:i32 depth)
}