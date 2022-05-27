/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n == 1){ return true};
    let count1 = 0;
    let count0 = 0;
    while(n>0){
        if((n & 1) == 0){
            count0++
        }else{
            count1++
        }
        n = n>>1;
    }
    return count1 == 1 && count0%2 == 0;
};

console.log(isPowerOfFour(16))




// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isPowerOfFour = function(n) {
//     if(n == 1){ return true};

//     let logOfnBase4 = Math.floor(Math.log(n)/Math.log(4));

//     return n>0 && Math.pow(4,logOfnBase4) == n
// };


