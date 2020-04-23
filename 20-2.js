var isValid = function(s) {
    let stack = [];
    let obj = {"(":")","[":"]","{":"}"};

    for(let i = 0;i < s.length;i++){
        let chr  = s[i];

        if(chr in obj){
            stack.push(chr);
        }
        else{
            if(chr != obj[stack.pop()]){
                return false;
            }
        }
    }

    return stack.length == 0;
}

console.log(isValid("["))