var isPalindrome = function(x) {
    if(x < 0){
        return false;
    }

    let orgX = x;
    let reverse = 0;
    while(x != 0){
        reverse = reverse * 10 + x % 10;
        x = parseInt(x / 10);
    }

    if(reverse == orgX){
        return true;
    }

    return false;
};  

console.log(isPalindrome(123));