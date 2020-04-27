var search = function (nums, target) {
    return searchPart(nums, target, 0, nums.length - 1);
};

var searchPart = function (nums, target, left, right) {
    if(right < left){
        return -1;
    }

    let mid = left + parseInt((right - 1 - left) / 2);
    let midNum = nums[mid];
    let rightNum = nums[right];
    let leftNum = nums[left];

    //存在逆序
    if (rightNum == target) {
        return right;
    }
    else if (leftNum == target) {
        return left;
    }
    //逆序，存在旋转
    else if (rightNum < leftNum) {
        let result = searchPart(nums,target,left,mid);
        if(result >= 0){
            return result;
        }
        else{
            return searchPart(nums,target,mid + 1, right);
        }
    }
    //顺序，使用二分查找
    else {
        if (target < leftNum || target > rightNum) {
            return -1;
        }
        else if (target < midNum) {
            return searchPart(nums,target,left,mid);
        }
        else if (target > midNum) {
            return searchPart(nums,target,mid + 1, right);
        }
        else {
            return mid;
        }
    }
}

console.log(search([4,5,6,7,0,1,2],3))

