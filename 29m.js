/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let positive = !(dividend > 0) ^ (divisor > 0);
    let absdd = Math.abs(dividend);
    let absds = Math.abs(divisor);

    if(absdd < absds){
        return 0;
    }

    let left = 1;
    let right = absdd;
    while(left < right){
        let mid = left + ((right - left - 1) >> 1);
        if(absds * mid < absdd){
            left = mid + 1;
        }
        else{
            right = mid;
        }   
    }

    let result;
    if(absds * right == absdd){
        result = positive?right:-right;
    }
    else{
        result = positive?(right-1):(1-right);
    }

    const mathpow = Math.pow(2,31);
    result = Math.min(result,mathpow - 1);
    result = Math.max(result,-mathpow);

    return result;
    
};

console.log(divide(-1,1));