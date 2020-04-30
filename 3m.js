var lengthOfLongestSubstring = function(s) {
    let maxlength = 0;
    let resultArr = [];
    for(let i = 0;i < s.length;i++){
        let value = s.charAt(i);
        let fIdx = resultArr.indexOf(value);
        resultArr.push(value);
        if(fIdx == -1){
            if(resultArr.length > maxlength){
                maxlength = resultArr.length;
            }
        }
        //找到一样的了。。
        else{
            resultArr.splice(0,fIdx + 1);
        }
    }

    return maxlength;
}

console.log(lengthOfLongestSubstring('pwwkew'));