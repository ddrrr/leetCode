/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowMap = [];
    let colMap = [];
    let boxMap = [];
    
    for(let i = 0;i < 9;i++){
        rowMap[i] = new Set();
        colMap[i] = new Set();
        boxMap[i] = new Set();
    }

    let rows = board.length;
    let cols = board[0].length;
    for(let i = 0;i < rows;i++){
        for(let j = 0;j < cols;j++){
            let value = board[i][j];

            if(value == '.'){
                continue;
            }

            let boxRow = Math.floor(i / 3);
            let boxCol = Math.floor(j / 3);
            let boxIdx = boxRow * 3 + boxCol;
            if(rowMap[i].has(value) || colMap[j].has(value) || boxMap[boxIdx].has(value)){
                return false;
            }
            else{
                rowMap[i].add(value);
                colMap[j].add(value);
                boxMap[boxIdx].add(value);
            }
        }
    }

    return true;
};

console.log(isValidSudoku([
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
  ]));