/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let dp = [];
    dp[0] = nums[0];
    for(let i = 1;i < nums.length;i++){
        dp[i] = Math.max(dp[i-1]+nums[i],nums[i]);

        if(dp[i] > dp[0]){
            dp[0] = dp[i];
        }
    }

    return dp[0];
};

console.log(maxSubArray([2,3,-6,2,4]));