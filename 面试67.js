/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function(str) {
    let result = 0;
    let flag;

    for(let i = 0;i < str.length;i++){
        let ch = str.charAt(i);
        if(_isNumber(ch)){
            if(flag == undefined){
                flag = true;
            }
            result = result * 10 + _char2Number(ch);
        }
        else if(ch == ' ' && result == 0 && flag == undefined){
            continue;
        }
        else if(ch == '-' && flag == undefined){
            flag = false;
        }
        else if(ch == '+' && flag == undefined){
            flag = true;
        }
        else{
            break;
        }
    }

    if(flag == false){
        result *= -1;
    }

    result = Math.min(result,Math.pow(2,31)-1);
    result = Math.max(result,-Math.pow(2,31));


    return result;
};

var _isNumber = function(chr){
    if(chr.length == 1 && chr >= '0' && chr <= '9'){
        return true;
    }

    return false;
}

var _char2Number = function(chr){
    return chr - '0';
}

console.log(strToInt("+-2"));