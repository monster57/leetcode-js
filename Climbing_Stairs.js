/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    return possibleNumberOfWays(n)

};


let possibleNumberOfWays = (n, memo = {}) => {
    if (memo[n]) {
        return memo[n];
    }
    if (n == 1 || n == 2) {
        return n;
    }
    memo[n] = possibleNumberOfWays(n - 1, memo) + possibleNumberOfWays(n - 2, memo)
    return memo[n];
}




console.log(climbStairs(10));