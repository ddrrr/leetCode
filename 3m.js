
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxLength = 0;
    let chrArr = [];
    for(let i = 0;i < s.length;i++){
        let chr = s.charAt(i);
        let findIdx = chrArr.indexOf(chr);
        if(findIdx == -1){
            chrArr.push(chr);
            maxLength = Math.max(maxLength,chrArr.length);
        }
        else{
            chrArr.splice(0,findIdx+1);
            chrArr.push(chr);
        }
    }

    return maxLength;
};

console.log(lengthOfLongestSubstring('abcabcbb'));

