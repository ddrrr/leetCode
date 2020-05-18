/**
 * @param {number[][]} grid
 * @return {number}
 */

 //动态规划
var minPathSum = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    const dp = [];
    let sum_i = 0;
    let sum_j = 0;
    for(let i = 0;i < m;i++){
        dp[i] = [];
        for(let j = 0;j < n;j++){
            if(i == 0){
                sum_i += grid[i][j];
                dp[i][j] = sum_i;
            }
            
            if(j == 0){
                sum_j += grid[i][j];
                dp[i][j] = sum_j;
            }
        }
    }

    for(let i = 1;i < m;i++){
        for(let j = 1;j < n;j++){
            dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1]) + grid[i][j];
        }
    }

    return dp[m-1][n-1];
};



console.log(minPathSum([[1,2],[1,1]]));