var isHappy = function(n) {
    let orgs = new Set();
    while(n != 1){
        let result= 0;
        while(n > 0){
            result += Math.pow(n % 10,2);
            n = Math.floor(n / 10);
        }
        n = result;
        if(orgs.has(result)){
            return false;
        }

        orgs.add(result);
    }

    return n == 1;
};

console.log(isHappy(2));

