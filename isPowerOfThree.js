/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    if(n == 1){ return true}
    let logOfnBase3 = Math.floor(Math.log(n)/Math.log(3));
    if(n > 0 && Math.pow(3, logOfnBase3) == n){
        return true;
    }

    return false;
};






// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfThree = function(n) {
//     if(n == 1){ return true}
//     if(n>0 && n%3 == 0){
//         return isPowerOfThree(n/3);
//     }
//     return false;
// };


console.log(isPowerOfThree(9));