/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length;
    let n = obstacleGrid[0].length;
    let memo = [...new Array(m+1)].map(a=>[...new Array(n+1)].fill(-Infinity))
    var findPath = (rowIndex, colIndex) => {


        // console.log(rowIndex, colIndex);
        if (rowIndex >= m || colIndex >= n || obstacleGrid[rowIndex][colIndex] == 1) {
            return 0
        }

        if (rowIndex == m - 1 && colIndex == n - 1) {
            return 1
        }
        if(memo[rowIndex][colIndex] != -Infinity){
            console.log(memo)
            return memo[rowIndex][colIndex]
        }



        // console.log(rowIndex, colIndex ,  obstacleGrid[rowIndex][colIndex]);

        return memo[rowIndex][colIndex] = findPath(rowIndex + 1, colIndex) +
            findPath(rowIndex, colIndex + 1)
    }

    return findPath(0, 0)
};


console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]]))
