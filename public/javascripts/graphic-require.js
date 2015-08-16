/**
 *
 * Created by thanatos on 15-8-15.
 */
require.config({
    paths: {
        jquery: 'lib/jquery.min',
        d3: 'lib/d3'
    }
});

require(['jquery', 'graph/graph'], function ($, graphic) {

    var query = {
        keyword: $('input[name="keyword"]').val(),
        depth: $('input[name="depth"]').val(),
        type: $('input[name="type"]').val()
    }

    // 开始加载知识图谱
    graphic.getForce("/search/graphic", query, {
        width : 1000,
        height : 800,
        success: function(){
            $(".graph").slideDown("slow");
        },
        dblclick: function(d, i){
            location.search = '?keyword=' + d.name + '&depth=2&type=1';
        }
    });

})