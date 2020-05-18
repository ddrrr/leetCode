/**
 * @param {number[][]} grid
 * @return {number}
 */
//A*
var minPathSum = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    let pathResult = [];
    for(let i = 0;i < m;i++){
        pathResult[i] = []; 
        for(let j = 0;j < n;j++){
            pathResult[i][j] = 0;
        }
    }

    let openGrids = [{i:0,j:0}];
    pathResult[0][0] = grid[0][0];
    while(openGrids.length > 0){
        let popGrid = openGrids.shift();
        let i = popGrid.i;
        let j = popGrid.j;
        let nextI = popGrid.i + 1;
        let nextJ = popGrid.j + 1;
        if(nextI < m){
           let nextIValue = pathResult[i][j] + grid[nextI][j] ;
           if(pathResult[nextI][j] == 0 || nextIValue < pathResult[nextI][j]){
                pathResult[nextI][j] = nextIValue;
                openGrids.push({i:nextI,j:j});
           }
        }

        if(nextJ < n){
            let nextJValue = pathResult[i][j] + grid[i][nextJ];
            if(pathResult[i][nextJ] == 0 || nextJValue < pathResult[i][nextJ]){
                pathResult[i][nextJ] = nextJValue;
                openGrids.push({i:i,j:nextJ});
            }
        }
    }

    return pathResult[m-1][n-1];
};

console.log(minPathSum([
    [1,3,1],
    [1,5,1],
    [4,2,1]]));