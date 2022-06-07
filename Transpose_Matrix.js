/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let row = matrix.length;
    let column = matrix[0].length
    let result = [];
    for(let i = 0; i<column;i++){
        result[i] = matrix.reduce((pv,cv)=>{
            pv.push(cv[i]);
            return pv;
        },[])
        console.log(result[i])
    };
    
    return result;
};

console.log(transpose([[1,2,3],[4,5,6]]));