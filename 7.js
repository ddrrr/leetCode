var reverse = function(x) {
    let result = 0;
    let rate = x > 0?1:-1; //正负号
    let startPos = -1;
    x = Math.abs(x);
    for(let i = 31;i >= 0;i--){
        let bitValue = Math.floor(x / Math.pow(10,i));  //取出第i位的值
        if(startPos == -1){
            if(bitValue == 0){
                continue;
            }
            else{
                startPos = i;
            }
        }

        let delIdx = startPos - i;
        let realPos = delIdx;

        result += bitValue * Math.pow(10,realPos);

        x -= bitValue * Math.pow(10,i);
    }

    if(result > Math.pow(2,31)){
        return 0;
    }

    Math.trunc


    return result * rate;
};

console.log(reverse(1563847412));
