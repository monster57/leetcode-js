/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let mat = [...new Array(m+1)].map(a=>[...new Array(n+1)].fill(-1))
    
    return findPath(m-1,n-1,mat);
};


let findPath = (i,j,mat)=>{
    if(i==0 && j==0){
        return 1;
    }
    if(i<0 || j<0){
        return 0;
    }

    if(mat[i][j]!=-1){
        return mat[i][j];
    }

    let left = findPath(i-1,j,mat);
    let top = findPath(i,j-1,mat);
    let sum = left+top;
    mat[i][j] = sum


    return mat[i][j];
}


console.log(uniquePaths(3,10));