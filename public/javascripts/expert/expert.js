require(["jquery", "expert/switchTab", "graph/graph"], function($, switchTab, graph){
    var $switchTab = $(".switchTab");

    if($switchTab.length <= 0) return false;

    var analysis = true, //用于单例
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
                var keyword = $("#expert").text();
                graph.getForce("/search/graph", {
                    keyword: keyword,
                    depth: 1,
                    type: 2
                });
                relationship = false;
            }
        }
    });
});