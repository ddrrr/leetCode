/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let len = nums.length;
    let left = 0,right = len-1; //左边的终点，右边的起点，中间的终点
    let cur = 0;
    while(cur <= right){
        switch(nums[cur]){
            case 0:
                swap(nums,left++,cur++);
                break;
            case 1:
                cur++
                break;
            case 2:
                swap(nums,right--,cur);
                break;
            default:
                break;
        }
    }

    return nums;
};

var swap = function(nums,i,j){
    if(i == j){
        return;
    }

    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

console.log(sortColors([2,0,1]));
