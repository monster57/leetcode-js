/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = [];
    for(let i = 0; i<=n;i++){
        result.push(totalBitsForNumber(i));
    }

    return result;
};


var totalBitsForNumber = function(n) {
    let count   = 0;
  while(n){
      if(n & 1){
          count++;
      }

      n = n >>> 1;
  }
  return count;
};


console.log(countBits(5));

