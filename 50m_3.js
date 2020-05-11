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

    return _myPow(x,n);
};

var _myPow = function(x,n){
    if(n === 0){
        return 1;
    }

    if(n === 1){
        return x;
    }

    if(n % 2 == 0){
        let half = _myPow(x,n / 2);
        console.log(half);
        return half * half;
    }
    else{
        //第2位也是1
        if(n % 4 > 1){
            let half = _myPow(x,(n+1)/2);
            console.log(half);
            return half * half / x;
        }
        else{
            let half = _myPow(x,(n-1)/2);
            console.log(half);
            return half * half * x;
        }
    }
}

console.log(myPow(2.00000,57));