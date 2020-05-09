/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let allResult = [];
    _per(nums,[],allResult);

    return allResult;
};

var _per = function(nums,path,allResult){
    if(path.length == nums.length){
        allResult.push([...path]);
        return;
    }

    for(let i = 0;i < nums.length;i++){
        let value = nums[i];
        //如果这次已经选过这个了
        if(path.indexOf(value) != -1){
            continue;
        }
        else{
            path.push(value);
            _per(nums,path,allResult);
            path.pop(value);
        }
    }
}

console.log(permute([1,2,3]));