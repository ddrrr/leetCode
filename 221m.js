/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
    // 矩阵的行
    const rows = matrix.length;
    if(rows === 0) return 0;
    // 矩阵的列
    const cols = matrix[0].length;
    if(cols === 0) return 0;
  
    // 最大面积
    let max = 0;
  
    // 从左到右，从上到下遍历
    for(let i = 0; i < rows; i++) {
      for(let j = 0; j < cols; j++) {
        if(matrix[i][j] === 1 || matrix[i][j] === '1') {
          // 对应左、上、左上，三点中最小的值 + 1
          matrix[i][j] = (i !== 0 && j !== 0) ? Math.min(matrix[i][j - 1], matrix[i - 1][j], matrix[i - 1][j - 1]) + 1 : 1;
          max = Math.max(max, matrix[i][j]);
        } else {
          matrix[i][j] = 0;
        }
      }
    }
    return max * max;
  };


let testArray = 
[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]];

console.log(maximalSquare(testArray));