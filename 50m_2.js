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

    let valuePow = x;
    let result = 1;
    while(n > 0){
        if(n & 1 > 0){
            result *= valuePow;
        }
        
        valuePow *= valuePow;
        n = Math.floor(n / 2);
    }

    return result;
};

console.log(myPow(2.0,-2147483648));