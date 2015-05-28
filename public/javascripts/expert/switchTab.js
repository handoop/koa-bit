/**
 * Created by YikaJ on 15/5/25.
 */
define(['jquery'], function($){
    return function($tab, callback){
        $tab.find("a").click(function(){
            $tab.find("li").removeClass("active");
            $(this.parentNode).addClass("active");
            var targetId = $(this).data("targetid");
            var $targetObj = $("#" + targetId);
            $targetObj.show().siblings().hide();
            callback && callback($targetObj);
        });
    };
});