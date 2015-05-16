define(['d3'], function(d3){
    return {
        /*
         * 获取数据拓扑图
         */
        getForce: function(url){
            d3.json("javascripts/data/graphData.json", function (err, data) {
                if (err) return console.log(err);

                // 插入SVG
                var width = 788;
                var height = 398;
                var svg = d3.select(".force-graph").append("svg")
                    .style("width", width)
                    .style("height", height);
                svg.append("text")
                    .attr('class', 'tips')
                    .text("双击关键字即可检索")
                    .attr('dy', 15);

                // 定义力学图，并传入点和线的数据进行数据转化
                var nodes = data.nodes;
                var links = data.links;
                var force = d3.layout.force()
                    .nodes(nodes)
                    .links(links)
                    .size([width, height]);

                // 处理转换后的Nodes数据
                nodes = nodes.sort(function (a, b) {
                    return b.weight - a.weight;
                });

                force.linkDistance(function (d, i) {
                    return 8 * i;
                })
                    .charge(-1000);


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


                // 绘制文字节点
                var textNodes = svg.selectAll('.node-text')
                    .data(nodes)
                    .enter()
                    .append('text')
                    .attr('class', 'node-text')
                    .text(function (data) {
                        return data.name;
                    })
                    .on("dblclick", function (d, i) {
                        if(i > 0){
                            location.search = "?qs=" + d.name;
                        }
                    })
                    .call(force.drag);

                textNodes.node().style.fill = "#E8433D";


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
    }
});