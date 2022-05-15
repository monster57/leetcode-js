https://leetcode.com/problems/guess-number-higher-or-lower/
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return          -1 if num is higher than the picked number
 *                  1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n, pick) {
    let start = 1;
    let end = n;
    while (start <= end) {
        let mid = Math.floor(start+(end-start)/2);
        if(mid == pick){
            return mid;
        }else if(mid>pick){
            end = mid - 1;
        }else{
            start = mid+1
        }
    }
    return -1;
};

console.log(guessNumber(220 , 17));
console.log(guessNumber(10 , 6));