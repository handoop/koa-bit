require(['jquery', 'search/graph'], function ($, graph) {
    /*
     * fixed 悬浮搜索框
     */

    // 获取搜索框的位置
    var $searchHeader = $(".search-header");
    if ($searchHeader.length == 0) return;
    var searchHeaderTop = $searchHeader.offset().top;

    // 检测滚动
    $(window).scroll(function () {
        if ($("body").scrollTop() >= searchHeaderTop) {
            $searchHeader.children().addClass('search-header-fixed');
        } else {
            $searchHeader.children().removeClass('search-header-fixed');
        }
    });
    $(window).scroll();

    // 只有第一页才有知识图谱
    if($(".paging li.active").text() == 1){
        // 加载loading样式
        $(".force-graph").addClass("loading");

        // 获取querystring
        var keyword = $("input[name=qs]")[0].value;

        // 开始加载知识图谱
         //"/search/graph?kw=" + keyword && "javascripts/data/graphData.json"
        graph.getForce("/search/graph?kw=" + keyword, function(){
            // 加载完成后移除loading样式
            $(".force-graph").removeClass("loading");
        });
    }

});
