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

    // 数据获取
    if($(".paging li.active").text() == 1){
        var keyword = $("input[name=qs]")[0].value;
        // "/search/graph?kw=" + keyword && "javascripts/data/graphData.json"
        graph.getForce("javascripts/data/graphData.json");
    }

});
