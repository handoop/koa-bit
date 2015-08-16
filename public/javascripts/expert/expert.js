require(["jquery", "expert/switchTab", "graph/graph"], function ($, switchTab, graph) {
    var $switchTab = $(".switchTab");

    if ($switchTab.length <= 0) return false;

    var analysis = true, //用于单例
        relationship = true;

    console.log('-------expert-------')

    //添加虚拟专家
    $('#appendVirtualRobot').click(function () {
        $.ajax({
            url: '/virtual/robot/append4robot2talk',
            type: 'POST',
            data: {robotId: $(this).data('id')},
            success: function (resp) {
                if(resp.code == 0)
                    alert('添加成功')
                if(resp.code == 2)
                    alert('该专家已经在跟你交谈')
                if(resp.code == 1)
                    alert('添加失败')
            },
            error: function(status, err){
                alert('未知错误')
            }
         })
    })


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
                var query =  {
                    keyword: keyword,
                    depth: 2,
                    type: 2,
                    width: 800,
                    height: 800
                }
                graph.getForce("/search/graphic", query, {
                    width: 800,
                    height: 500,
                    title: '双击节点检索相关专家',
                    dblclick: function(d, i){
                        location.replace("/records?type=4&qs=" + d.name);
                    }
                });
                relationship = false;
            }
        }
    });
});