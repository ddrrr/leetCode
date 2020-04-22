var longestCommonPrefix = function (strs) {
    let result = "";
    let testStr = strs[0];

    if(!testStr){
        return "";
    }

    for (let pos = 0; pos < testStr.length; pos++) {
        let testChr = testStr.charAt(pos);
        let flag = true;
        for(i = 1;i < strs.length;i++){
            if(strs[i].charAt(pos) != testChr){
                flag = false;
                break;
            }
        }

        if(!flag){
            break;
        }
        else{
            result = result + testChr;
        }
    }

    return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));