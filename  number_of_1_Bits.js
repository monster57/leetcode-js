/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count   = 0;
  while(n){
      if(n & 1){
          count++;
      }

      n = n >>> 1;
  }
  return count;
};



/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  return n.toString(2).split("").reduce((pv, cv)=>{return (+pv)+(+cv)})  
};

console.log(hammingWeight(11111111111111111111111111111101))