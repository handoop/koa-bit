require(['jquery', 'graph/graph'], function ($, graph) {
    /*
     * 搜索条的Label高亮样式
     */
    $(".search-header label").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
        location.search = "?" + $(this).parents("form").serialize(); // 修改Url参数会直接重新加载
    });

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

    /*
     * 获得知识图谱
     */

    // 只有第一页论文和期刊才有知识图谱
    var text = $(".paging li.active").text() == 1 && $("label.active").text()
    if (text == "论文" || text == '期刊') {

        // 获取querystring
        var keyword = $("input[name=qs]")[0].value;
        var depth = 1;
        var query = {
            keyword: keyword,
            depth: depth,
            type: 1 //知识图谱
        }
        // 开始加载知识图谱
        graph.getForce("/search/graphic", query, {
            width : 400,
            height : 300,
            success: function(){
                $(".graph").slideDown("slow");
            },
            showKnowledge: function (k) {
                console.log('show knowledge ' + k)
                $('.knowledge-name a').attr('href', k.come_from_url).text(k.name)
                $('.knowledge-description').text(k.description)
                $('a.come-from').attr('href', k.come_from_url).text('来自>>' + k.come_from)
                $('.explanation').slideDown('slow')
            },
            dblclick: function(d, i){
                location.search = "?qs=" + d.name;
            }
        });

        //专家推荐
        $.ajax({
            url: '/search/recommend4expert',
            type: 'GET',
            data: {keyword: keyword},
            success: function (resp) {
                for(var i in resp){
                    var template = [
                        '<div class="expert-item text-center">',
                            '<a href="/expert/'+resp[i].id+'">',
                                '<img class="image" src="/images/default.png"/>',
                            '</a>',
                            '<a class="black_link" href="/expert/'+resp[i].id+'">',
                                '<h4>'+resp[i].name+'</h4>',
                            '</a>',
                            '<p class="reason">'+resp[i].reason+'</p>',
                        '</div>'
                    ]
                    $('.person').append(template.join(''))
                }
                $('.person').slideDown('slow')
            }
        })

    }


});
