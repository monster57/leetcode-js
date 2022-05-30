/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {

    let result = (n & 1);
    console.log(n , 'this is n');
    for (var i = 0; i < 31; i++) {
        n = n>>1;
        result = result << 1;
        result += (n & 1); 
    }
    
    return result>>>0;
};


console.log(reverseBits(11111111111111111111111111111101))