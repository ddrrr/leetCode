/**
 * @param {number} n
 * @return {number}
 */
var waysToChange = function (n) {
    const coins = [1,5,10,25];
    const dp = [1].concat(Array(n).fill(0));

    for(let coinIdx = 0;coinIdx < coins.length;coinIdx++){
        for(let i = 1; i < n + 1;i++){
            let coinValue = coins[coinIdx];
            if(coinValue <= i){
                dp[i] = dp[i] + dp[i - coinValue];     
            }
        }
    }

    return dp[dp.length - 1] % 1000000007;
}

console.log(waysToChange(666666));
