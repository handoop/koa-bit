require(['jquery', 'd3'], function ($, d3) {
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
     * 获取数据拓扑图
     */

    // 数据获取
    var keyword = $("input[name=qs]")[0].value;
    // "/search/graph?kw=" + keyword && "javascripts/data/graphData.json"
    d3.json("javascripts/data/graphData.json", function (err, data) {
        if (err) return console.log(err);

        // 插入SVG
        var svg = d3.select(".search-graph").append("svg")
            .style("width", 788)
            .style("height", 398)
            .style("border", "1px solid #ccc");

        var nodes = data.nodes;
        var links = data.links;
        // 定义力学图，并传入点和线的数据进行数据转化
        var force = d3.layout.force()
            .nodes(nodes)
            .links(links)
            .size([790, 400])
            .linkDistance(200)
            .charge(-300)
            .start();

        // 处理转换后的Nodes数据
        nodes = nodes.sort(function(a, b){
            return b.weight - a.weight;
        });
        // group 包含了node和text
        var node = svg.selectAll("g")
            .data(nodes)
            .enter()
            .append("g")
            .call(force.drag);

        // 绘制节点
        var circleNodes = node.append("circle")
            .attr("r", function(d, i){
                if(i <= 2) return 20;
                else return 10;
            })
            .attr("stroke", "#666")
            .attr("stroke-width", "1")
            .attr("fill", function(d, i){
                if(i <= 2) return "#ccc";
                else return "transparent";
            });

        // 绘制文字节点
        var textNodes = node.append('text')
            .text(function (data) {
                return data.name;
            });


        // 将线条描绘出来
        var nodeLinks = svg.selectAll("line")
            .data(links)
            .enter()
            .append("line")
            .style("stroke", "#dfdfdf")
            .style("stroke-width", 1);


        // 动态渲染
        force.on("tick", function () {

            // 重新修正文字节点的位置
            textNodes.attr("transform", function (d) {
                    return "translate(" + d.x + "," + d.y + ")";
                });

            // 重新修真线段端点
            nodeLinks.attr("x1", function (d) {
                return d.source.x;
            });
            nodeLinks.attr("y1", function (d) {
                return d.source.y;
            });
            nodeLinks.attr("x2", function (d) {
                return d.target.x;
            });
            nodeLinks.attr("y2", function (d) {
                return d.target.y;
            });

            // 重新修正节点圆心
            circleNodes.attr("cx", function (d) {
                return d.x;
            });
            circleNodes.attr("cy", function (d) {
                return d.y;
            });
        });
    });
});
