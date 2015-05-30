require.config({
    paths: {
        jquery: 'lib/jquery.min',
        d3: 'lib/d3'
    }
});

define(['jquery', 'search/search', 'expert/expert'], function($){
    // 处理 footer
    var bodyHeight = $('body').height();
    var clientHeight = $(window).height();
    var $footer = $(".footer");

    if((bodyHeight - $footer.height()) < clientHeight){
        $footer.addClass("fixed-footer");
        $('body').css("paddingBottom", "30px");
    }
    $footer.slideDown();

});