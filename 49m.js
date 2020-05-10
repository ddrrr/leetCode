/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let resultArray = [];
    let newArray = [];
    let resultMap = new Map();
    //先把每个字符串排序
    for(let i = 0;i < strs.length;i++){
        let perstr = strs[i];
        let chrArray = perstr.split('');
        chrArray.sort((a,b)=>a.charCodeAt(0) - b.charCodeAt(0));
        perstr = chrArray.join();
        newArray.push(perstr);
    }

    //把字符串一样的序号放进一个hash里
    for(let i = 0;i < newArray.length;i++){
        let mapArray = resultMap.get(newArray[i]);
        if(!mapArray){
            mapArray = [];
        }
        mapArray.push(strs[i]);
        resultMap.set(newArray[i],mapArray);
    }

    //再把答案拿出来
    resultMap.forEach((value)=>{
        resultArray.push(value);
    })

    return resultArray;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));