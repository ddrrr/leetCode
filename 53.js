/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let nowSum = 0;
    let maxSum;
    for(let i = 0;i < nums.length;i++){
        nowSum += nums[i];
        if(maxSum == undefined || nowSum > maxSum){
            maxSum = nowSum;
        }

        if(nowSum < 0){
            nowSum = 0;
        }
    }

    return maxSum;
};

console.log(maxSubArray([-2]));