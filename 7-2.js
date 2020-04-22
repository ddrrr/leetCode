var reverse = function (x) {
    let result = 0;
    while (x !== 0) {
        let tmp = x % 10;
        result = result * 10 + tmp;

        x = Math.trunc(x / 10);
    }


    if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
        return 0;
    }


    return result;
};

console.log(reverse(123));
