/**
 * Created by YikaJ on 15/5/26.
 */
define(["d3"], function (d3) {
    var data = [
        {year: 2009, count: 3},
        {year: 2010, count: 1},
        {year: 2012, count: 2},
        {year: 2014, count: 1}];

    var years = data.map(function(item){return item.year});
    var values = data.map(function(item){return item.count});
    var width = 700, height = 350;


    return function (el) {
        // 插入svg
        var svg = d3.select(el)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        // 坐标轴比例尺
        var xAxisScale = d3.scale.ordinal()
            .domain(years)
            .rangeRoundBands([0, 600], 0.5);
        var yAxisScale = d3.scale.linear()
            .domain([0, d3.max(values)])
            .rangeRound([300, 0]);

        // 定义坐标轴
        var xAxis = d3.svg.axis()
            .scale(xAxisScale)
            .orient("bottom");
        var yAxis = d3.svg.axis()
            .ticks(d3.max(values))
            .scale(yAxisScale)
            .orient("left");

        // 数据比例尺
        var xScale = d3.scale.ordinal()
            .domain(d3.range(values.length))
            .rangeBands([0, 600], 0.5);
        var yScale = d3.scale.linear()
            .domain([0, d3.max(values)])
            .range([0, 300]);

        svg.selectAll("rect")
            .data(values)
            .enter()
            .append("rect")
            .attr("x", function (d, i) {
                return 30 + xScale(i)
            })
            .attr("y", function (d, i) {
                return 30 + 300 - yScale(d)
            })
            .attr("width", function () {
                return xScale.rangeBand();
            })
            .attr("height", yScale)
            .transition()
            .duration(1000)
            .ease("bounce")
            .delay(function(d, i){
                return 200 * i;
            });

        svg.selectAll("text")
            .data(values)
            .enter().append("text")
            .attr("x", function (d, i) {
                return 30 + xScale(i);
            })
            .attr("y", function (d, i) {
                return 50 + 300 - yScale(d);
            })
            .attr("dx", function (d, i) {
                return xScale.rangeBand() / 2.4;
            })
            .attr("dy", 0)
            .attr("text-anchor", "begin")
            .attr("font-size", 14)
            .attr("fill", "white")
            .text(function (d, i) {
                return d;
            });

        // 定义坐标轴样式
        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(30,330)")
            .call(xAxis);

        svg.append("g")
            .attr("class", "axis")
            .attr("transform", "translate(30,30)")
            .call(yAxis);
    }
});