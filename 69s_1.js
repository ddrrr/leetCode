/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let left = 0,right = x,result = 0;
    let middle = 0
    while(left <= right){
        middle = Math.floor((left + right) / 2);
        let pmid = middle * middle;
        if(pmid == x){
            return middle;
        }
        else if(pmid > x){
            right = middle - 1;
        }
        else if(pmid < x){
            left = middle + 1;
            result = middle;
        }
    }
   
    return result;
};

console.log(mySqrt(5));