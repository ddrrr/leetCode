/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort();
    let res = [];
    helper(nums,res);
    return res;
}

var helper = function(nums,res,tmp = [],start = 0){
    res.push(tmp);
    if(tmp.length == nums.length) return;
    for(let i = start ;i < nums.length;i++){
        if(i > start && nums[i] == nums[i-1]){
            continue;
        }
        tmp.push(nums[i]);
        helper(nums,res,tmp.slice(),i+1);
        tmp.pop();
    }
}

console.log(subsetsWithDup([1,3]));