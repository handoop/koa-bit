

service GraphService{


    string getKnowledgeUndirectedGraph(1:string keyword, 2:i32 depth);

    string getExpertUndirectedGraph(1:string name, 2:i32 depth);
}