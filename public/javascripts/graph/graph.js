define(["graph/histogram", "graph/pie", "graph/force"], function (histogram, pie, force) {

    return {
        /*
        * 直方图*/
        getHistogram: histogram,

        /*
        * 饼图*/
        getPie: pie,

        /*
        * 力学图*/
        getForce: force
    }
});