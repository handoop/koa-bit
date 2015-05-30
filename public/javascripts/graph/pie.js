/**
 * Created by YikaJ on 15/5/26.
 */
define(['d3'], function (d3) {
    var width = 700, height = 350;
    var pie = d3.select(".pie");
    if(!pie[0][0]) return false;
    var pieData = JSON.parse(pie.attr("data-pieData"));
    var data = [
        {
            name: "期刊",
            value: pieData.ma
        },
        {
            name: "论文",
            value: pieData.th
        }
    ];

    var names = data.map(function(item){ return item.name});
    var values = data.map(function(item){ return item.value});

    return function () {
        // 插入SVG
        var svg = d3.select(".pie")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        var pie = d3.layout.pie();
        var outerRadius = width / 4;
        var innerRadius = 0;

        var arc = d3.svg.arc()
            .outerRadius(outerRadius)
            .innerRadius(innerRadius);

        var color = d3.scale.category10();

        // 绘制路径与文字
        var arcs = svg.selectAll("g")
            .data(pie(values))
            .enter()
            .append("g")
            .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

        // 路径
        arcs.append("path")
            .attr("fill", function (d, i) {
                return color(i);
            })
            .attr("transform", function () {
                return "translate(" + (width / 2 - outerRadius) + ", 0)";
            })
            .attr("d", function (d, i) {
                return arc(d);
            });

        // 文字
        arcs.append("text")
            .attr("transform", function (d) {
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("dx", function () {
                return width / 2 - outerRadius;
            })
            .attr("text-anchor", "middle")
            .text(function (d, i) {
                return names[i] + "：" + d.value;
            });

    }
});