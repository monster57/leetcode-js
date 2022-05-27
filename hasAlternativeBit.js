/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {

    while ((n >> 1) > 0) {
        if ((n & 1) == ((n >> 1) & 1)) {
            return false;
        }
        n = n >> 1;
    }
    return true;
};


console.log(hasAlternatingBits(1));