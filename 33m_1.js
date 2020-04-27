var search = function(nums,target){
    let left = 0;
    let right = nums.length - 1;
    while(left < right){
        let mid = parseInt ((left + right) / 2);  
        let midValue = nums[mid];
        if(midValue == target){
            return mid;
        }

        let leftValue = nums[left];
        let rightValue = nums[right];
        //左半区顺序
        if(midValue >= leftValue){
            if(target < midValue && target >= leftValue ){
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }
        } 
        //右半区顺序
        else if(midValue <= rightValue){
            if(target > midValue && target <= rightValue){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
        }
    }

    if(left == right && nums[left] == target){
        return left;
    }

    return -1;
}

console.log(search([3,1],0));