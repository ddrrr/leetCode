/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    candidates.sort((a,b) => a - b);   
    let finalResult = [];
    
    _getComb(candidates,target,0,[],finalResult);
    return finalResult;
};

var _getComb = function (candidates, leftValue,begin,path,finalResult) {
    if(leftValue == 0){
        finalResult.push([...path]);
        return;
    }

    let len = candidates.length;
    for(let i = begin;i < len;i++){
        if(leftValue - candidates[i] < 0){
            break;
        }

        path.push(candidates[i]);
        _getComb(candidates,leftValue- candidates[i],i,path,finalResult);
        path.pop();
    }
}

console.log(combinationSum([2, 3, 5], 8));