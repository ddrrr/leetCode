var getRomanValue = function (curChar, nextChar) {
    switch (curChar) {
        case 'I':
            if (nextChar == 'V' || nextChar == 'X') {
                return -1;
            }
            else {
                return 1;
            }
        case 'V': return 5;
        case 'X':
            if (nextChar == 'L' || nextChar == 'C') {
                return -10;
            }
            else {
                return 10;
            }
        case 'L': return 50;
        case 'C':
            if (nextChar == 'D' || nextChar == 'M') {
                return -100;
            }
            else {
                return 100;
            }
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0;
    }
}

var romanToInt = function (s) {
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        let curValue = getRomanValue(s.charAt(i),s.charAt(i+1));
        sum += curValue;
    }

    return sum;
};

console.log(romanToInt('IX'));