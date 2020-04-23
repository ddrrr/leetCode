var isValid = function (s) {
    var stack = [];

    for (let i = 0; i < s.length; i++) {
        let chr = s.charAt(i);
        let findAnother = -1;
        switch (chr) {
            case '(':
            case '{':
            case '[':
                stack.push(chr);
                break;
            case ')':
                if(stack.pop() != '('){
                    return false;
                }
                break;
            case '}':
                if(stack.pop() != '{'){
                    return false;
                }
                break;
            case ']':
                if(stack.pop() != '['){
                    return false;
                }
                break;
            default:
                break;
        }
    }

    if (stack.length == 0) {
        return true;
    }
    else {
        return false;
    }

}

console.log(isValid('(]'));