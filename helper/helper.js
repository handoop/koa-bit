// 用于转化数字成千位数
var thousandth = function(num){
    if(isNaN(num)){
        throw new Error("thousandth needs number");
    }

    var numArr =  num.toString().split('');
    var start = numArr.indexOf('.') > -1 ? numArr.indexOf('.') - 1 : numArr.length - 1 ;
    var flag = 1;
    for(var i = start; i > 0; i--){
        if(flag++ % 3 == 0) numArr.splice(i, 0, ",");
    }
    return numArr.join("");
};

var dateFormat = function (date, format) {
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds()
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}

var switchType = function(type){
    var output;
    switch(type){
        // 2 <==> thesis 
        case "2":
            output = "thesis";
            break;
        case "thesis":
            output = "2";
            break;
        
        // 3 <==> magazine    
        case "3":
            output = "magazine";
            break;
        case "magazine":
            output = "3";
            break;

        // 4 <==> expert
        case "4":
            output = "expert";
            break;
        case "expert":
            output = "4";
            break;
    }
    return output;
}

module.exports = {
    thousandth: thousandth,
    switchType: switchType,
    dateFormat: dateFormat
};