require(["jquery", "expert/switchTab", "graph/graph"], function($, switchTab, graph){
    var $switchTab = $(".switchTab");

    if($switchTab.length <= 0) return false;

    var analysis = true,
        relationship = true;

    switchTab($switchTab, function($obj){
        if($obj[0].id == "analysis"){
            if(analysis){
                graph.getHistogram("#articleYearCount");
                graph.getPie();
                graph.getHistogram("#blockquoteYearCount");
                analysis = false;
            }
        }
        if($obj[0].id == "relationship"){
            if(relationship){
                graph.getForce("/search/graph", {
                    keyword: "数据仓库",
                    depth: 1
                });
                relationship = false;
            }
        }
    });
});