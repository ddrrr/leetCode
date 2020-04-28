var singleNumbers = function(nums) {
    //先找出结果a和b的异或值
    let resultab = 0;
    for(var idx in nums){
        resultab ^= nums[idx];
    }

    //找出第一位不是0的位数
    let div = 1;
    while(resultab > div){
        if((resultab & div) != 0){
            break;
        }

        div = div << 1;
    }

    if(resultab < div){
        return -1;
    }

    let ra = 0;
    let rb = 0;
    for(let idx in nums){
        if((nums[idx] & div) == 0){
            ra ^= nums[idx];
        }
        else{
            rb ^= nums[idx];
        }

    }

    return [ra,rb];
}

console.log(singleNumbers([1,2,5,2]));