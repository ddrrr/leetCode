/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    const len = triangle.length;

    if(len == 1){
        return triangle[0][0];
    }

    let minResult = Number.MAX_VALUE;
    for(let i = 1;i < len;i++){
        for(let j = 0;j < i + 1;j++){
            let left = triangle[i-1][j-1];
            let right = triangle[i-1][j];
           
            if(left != undefined && right != undefined){
                triangle[i][j] += Math.min(left,right);     
            }
            else if(left != undefined){
                triangle[i][j] += left;
            }
            else if(right != undefined){
                triangle[i][j] += right;
            }

            if(i == len - 1){
                if(triangle[i][j] < minResult){
                    minResult = triangle[i][j];
                }
            }
        }
    }

    return minResult;
};

console.log(minimumTotal([[7],[-5,9],[6,5,2],[-8,-2,-7,3],[-2,6,-6,-1,4]]));