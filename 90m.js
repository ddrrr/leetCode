/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort();
    let result = [];
    let tmp = [];
    _sub(nums,0,tmp,result);
    return result;
};

var _sub = function(nums,start,tmp,result){
    if(start >= nums.length){
        result.push([...tmp]);
        return;
    }

    let elem = nums[start];
    let iCount = 1;
    for(let i = start + 1;i < nums.length;i++){
        if(nums[i] == elem){
            ++iCount;
        }
        else{
            break;
        }
    }

    let newTmp = [...tmp];
    for(let i = 0;i <= iCount;i++){
        _sub(nums,start+iCount,newTmp,result);
        newTmp.push(elem);
    }
}

console.log(subsetsWithDup([1,2,2]));