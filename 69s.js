var mySqrt = function(x) {
    for(let i = 0;i <=  x / 2 + 1;i++){
        let value = i * i;
        if(value == x){
            return i;
        }
        else if(value > x){
            return i - 1;
        }
    }   
};

console.log(mySqrt(2));