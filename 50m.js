/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n < 0){
        n = -n;
        x = 1 / x;
    }

    //转2进制
    let str2radix = n.toString(2);
    let valuePow = x;
    let result = 1;
    for(let i = str2radix.length - 1;i >= 0;i--){
        if(i < str2radix.length - 1){
            valuePow *= valuePow;
        }

        if(str2radix.charAt(i) == '1'){
            result *= valuePow;
        }
    }

    return result;
};

console.log(myPow(2.0,10));