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

module.exports = {
    thousandth: thousandth
};