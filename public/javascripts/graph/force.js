/**
 * Created by YikaJ on 15/5/28.
 */
define(["d3"], function (d3) {
    var width = 698;
    var height = 398;

    return function (url, query, option) {
        d3.xhr(url)
            .header("Content-Type", "application/json")
            .post(JSON.stringify(query), function (err, xhr) {
                if (err) return console.error(err);
                var data = JSON.parse(xhr.response);

                if (typeof data.nodes === "undefined") return false;

                // 节点与线条的数据
                var nodes = data.nodes;
                var links = data.links;
                if (data.nodes.length <= 1) return false;

                var svg = d3.select(".force-graph").append("svg")
                    .attr("width", width)
                    .attr("height", height);
                svg.append("text")
                    .attr('class', 'tips')
                    .text("可以双击节点文字")
                    .attr('dy', 15);

                // 定义力学图，并传入点和线的数据进行数据转化
                var force = d3.layout.force()
                    .nodes(nodes)
                    .links(links)
                    .size([width, height]);

                // 绘制文字节点
                var textNodes = svg.selectAll('.node-text')
                    .data(nodes)
                    .enter();

                // 处理转换后的Nodes数据
                nodes.sort(function (a, b) {
                    return b.weight - a.weight;
                });

                // 继续定义力学图的线条距离与线条的磁性
                force.linkDistance(function (d, i) {
                    return 50 + 20 * i;
                }).charge(-1000);


                // 将线条描绘出来
                var nodeLinks = svg.selectAll("line")
                    .data(links)
                    .enter()
                    .append("line")
                    .attr('class', 'link');

                // 绘制节点
                var circleNodes = svg.selectAll('.node')
                    .data(nodes)
                    .enter()
                    .append("circle")
                    .attr('class', 'node')
                    .attr("r", function (d, i) {
                        if (i <= 2) return 20;
                        else return 10;
                    })
                    .attr('class', function (d, i) {
                        if (i <= 2) return "node lg-node";
                        else return "node sm-node";
                    })
                    .call(force.drag);

                // 渲染文字
                textNodes = textNodes
                    .append('text')
                    .attr('class', 'node-text')
                    .text(function (data) {
                        return data.name;
                    })
                    .call(force.drag);

                if(option && option.dblclick){
                    textNodes.on("dblclick", function (d, i) {
                        if (i > 0) {
                            option.dblclick(d, i);
                        }
                    });
                }

                // 取第一个节点进行高亮
                textNodes.node().style.fill = "#E8433D";
                textNodes.node().style.fontWeight = 600;

                // 执行加载完后的回调
                option && option.success && option.success();

                // 动态渲染
                force.start()
                    .on("tick", function () {
                        //限制结点的边界
                        nodes.forEach(function (d, i) {
                            d.x = d.x - 15 < 0 ? 15 : d.x;
                            d.x = d.x + 15 > width ? width - 15 : d.x;
                            d.y = d.y - 15 < 0 ? 15 : d.y;
                            d.y = d.y + 15 > height ? height - 15 : d.y;
                        });

                        // 重新修正文字节点的位置
                        textNodes.attr("transform", function (d) {
                            return "translate(" + d.x + "," + d.y + ")";
                        });

                        // 重新修正节点圆心
                        circleNodes.attr("cx", function (d) {
                            return d.x;
                        });
                        circleNodes.attr("cy", function (d) {
                            return d.y;
                        });

                        // 重新修正线段端点
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

                    });
            });
    }
});