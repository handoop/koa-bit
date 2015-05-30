require(["jquery", "expert/switchTab", "graph/graph"], function ($, switchTab, graph) {
    var $switchTab = $(".switchTab");

    if ($switchTab.length <= 0) return false;

    var analysis = true, //用于单例
        relationship = true;

    switchTab($switchTab, function ($obj) {
        if ($obj[0].id == "analysis") {
            if (analysis) {
                var articleData = [
                    {year: 2010, value: 3},
                    {year: 2011, value: 4},
                    {year: 2012, value: 2},
                    {year: 2013, value: 5},
                    {year: 2014, value: 3}
                ];
                var relatedData = [
                    {year: 2010, value: 53},
                    {year: 2011, value: 40},
                    {year: 2012, value: 67},
                    {year: 2013, value: 89},
                    {year: 2014, value: 60}
                ];

                graph.getHistogram("#articleYearCount", articleData);
                graph.getPie();
                graph.getHistogram("#blockquoteYearCount", relatedData);
                analysis = false;
            }
        }
        if ($obj[0].id == "relationship") {
            if (relationship) {
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